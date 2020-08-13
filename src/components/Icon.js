// purpose: render an icon according to platform
import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';

if (Platform.OS === 'web') {
    // FIX : https://github.com/oblador/react-native-vector-icons#web-with-webpack
    // Use prebuilt version of RNVI in dist folder

    // Generate required css
    const iconFontStyles = `@font-face {src: url(${iconFont});font-family: Ionicons;}`;

    // Create stylesheet
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = iconFontStyles;
    } else {
        style.appendChild(document.createTextNode(iconFontStyles));
    }

    // Inject stylesheet
    document.head.appendChild(style);


}
// FIX: https://github.com/oblador/react-native-vector-icons#the-icons-show-up-as-a-crossed-out-box-on-android
export default function NativeIcon(props) {
    return <Icon name="ios-person" size={30} color="#4F8EF7" />;
}
