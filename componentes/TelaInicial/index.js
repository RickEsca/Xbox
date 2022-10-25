import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import imgfundo from '../../assets/imgfundo.jpg'
import totorop from '../../assets/totorop.jpg'
import nino from '../../assets/nino.jpg'
import conheca from '../../assets/conheça.jpg'
import estilos from './estilo';


export default function TelaInicial (props) {
    return (
        <View style={estilos.container}>
            <Image source={imgfundo}/>
            <Text style={estilos.titulo}>Studio Ghibli</Text>
            <Text style={estilos.desc}>Studio Ghibli é um estúdio de cinema de animação japonês com sede em Koganei, Tóquio. O estúdio é mais conhecido por seus filmes de animação e também produziu vários curtas, comerciais de televisão e um filme de televisão.</Text>

            <Pressable
               onPress={ () => { props.navigation.navigate("Produtos")}}
               style={estilos.btn}
               >
                <Image source={ totorop } style={estilos.img}/>
                <Text style={estilos.desc}>Conheça Produtos Ghibli</Text>
               </Pressable>
               
            <Pressable
               onPress={ () => { props.navigation.navigate("Jogos")}}
               style={estilos.btn}
               >
                <Image source={ nino } style={estilos.img}/>
                <Text style={estilos.desc}>Conheça Ni No Kuni</Text>
               </Pressable>
               
            <Pressable
               onPress={ () => { props.navigation.navigate("Museu Ghibli")}}
               style={estilos.btn}
               >
                <Image source={ conheca } style={estilos.img}/>
                <Text style={estilos.desc}>Conheça o museu Ghibli</Text>
               </Pressable>
        </View>
    )
}