import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/';

import styles from './styles';

export default function App(){
    const [totalConnections, setTotalConnections] = useState([]);

    useEffect(() => {
        api.get('connections').then((response) =>{
            console.log(response.data);
            setTotalConnections(response.data.total);
        });
    }, []);

    const { navigate } = useNavigation();

    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages(){
        navigate('Study');
    }

    return (
    <View style={styles.container}>
        <Image source={landingImg} style={styles.banner} />

        <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
            <RectButton
                onPress={handleNavigateToStudyPages}
                style={[styles.button, styles.buttonPrimary]}
            >
                <Image source={studyIcon} />
                <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>

            <RectButton
                onPress={handleNavigateToGiveClassesPage}
                style={[styles.button, styles.buttonSecondary]}
            >
                <Image source={giveClassesIcon} />
                <Text style={styles.buttonText}>Dar aulas</Text>
            </RectButton>
        </View>
        <Text style={styles.totalConnections}>
            Total de {totalConnections} conexões ja realizadas !<Image source={heartIcon} />
        </Text>
    </View>
    );
}