import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import { useTheme } from '@react-navigation/native';
import { IAppTheme } from '../../../../constants/theme';
import { doc } from 'firebase/firestore';
import { fontResponsive, hp, wp } from '../../../../utils/responsive';
import { APP_IMAGES } from '../../../../assets/images';

interface Props {
    id: string;
    done: boolean;
    title: string;
    toggleTodoDone: (ref: any, done: boolean) => Promise<void>;
    deleteTodo: (ref: any) => Promise<void>;
}

const TodoItemListView = ({ title, id, done, toggleTodoDone, deleteTodo }: Props) => {
    const { colors }: IAppTheme = useTheme();


    const toggleDone = useCallback(() => {
        toggleTodoDone(id, !done)
    }, [id, done])

    const onDeleteTodo = useCallback(() => {
        deleteTodo(id);
    }, [id]);

    
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={toggleDone} style={styles.todo}>
                {
                    done ? <Image source={APP_IMAGES.doneIcon} style={styles.doneContainer} /> :
                        <View style={[styles.pendingContainer]} />
                }
                <Text style={[styles.titleText, { color: colors.text }]}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeleteTodo}>
                <Image source={APP_IMAGES.deleteIcon} style={styles.doneContainer} />
            </TouchableOpacity>
        </View>
    )
}

export default TodoItemListView

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        padding: wp(12),
        borderColor: 'gray',
        borderRadius: wp(12),
        flexDirection: 'row',
        marginTop: hp(20),
    },
    titleText: {
        fontSize: fontResponsive(15),
        marginLeft: wp(12),
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    doneContainer: {
        width: wp(25),
        height: wp(25),
        resizeMode: 'contain',
    },
    pendingContainer: {
        width: wp(25),
        height: wp(25),
        borderRadius: wp(25),
        borderWidth: wp(1.6),
        borderColor: 'gray',
    }
})