import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const WelcomeUser = () => {
    return (
        <View style={styles.container}>
            <Svg width={264} height={246} viewBox="0 0 264 246" fill="none">
                <Circle cx={131.891} cy={60} r={60} fill="#F8F8FF" />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M263.781 246H0.000488281C8.46219 181.682 64.286 132 131.891 132C199.496 132 255.319 181.682 263.781 246Z"
                    fill="#F8F8FF"
                />
                <Path
                    transform="translate(25, 10) scale(0.8)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M106.522 94.454C106.051 94.1073 105.611 93.7033 105.212 93.2424L82.9527 67.5414C80.0604 64.2015 80.4229 59.1492 83.7628 56.2567L85.2745 54.9474C88.6143 52.0548 93.6668 52.4175 96.5591 55.7572L113.149 74.9125L168.827 25.9904C172.146 23.0741 177.201 23.4005 180.117 26.7196L181.437 28.2221C184.354 31.5412 184.027 36.596 180.708 39.5122L117.606 94.9574C114.364 97.8063 109.465 97.5607 106.522 94.454Z"
                    fill="#248F42"
                />
            </Svg>
        </View>
    );
};


export default WelcomeUser

const styles = StyleSheet.create({
    container: ""
})