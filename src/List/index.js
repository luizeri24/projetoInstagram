import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from '../Header';

const List = props => {
  function likeImage(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }
  function showLikes(likers) {
    if (likers === 0) {
      return;
    }
    return (
      <Text style={styles.likers}>
        {likers}
        {likers > 1 ? ' Curtidas' : ' Curtida'}
      </Text>
    );
  }
  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image
          source={{uri: props.data.imgperfil}}
          style={styles.imagePerfil}
        />
        <Text style={styles.namePerfil}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{uri: props.data.imgPublicacao}}
        style={styles.imagePublish}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={liker => setLikeImage(liker)}>
          <Image
            source={likeImage(props.data.likeada)}
            style={styles.btnLike}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../img/comment.png')}
            style={styles.btnComment}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../img/send.png')} style={styles.btnSend} />
        </TouchableOpacity>
      </View>
      {showLikes(props.data.likers)}
      <Text style={styles.showName}>{props.data.nome}</Text>
      <Text style={styles.description}>{props.data.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dataNome: {
    fontSize: 20,
  },
  viewPerfil: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
  imagePerfil: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  namePerfil: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  imagePublish: {
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  btnLike: {
    width: 30,
    height: 30,
  },
  btnComment: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  btnSend: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  likers: {
    fontWeight: 'bold',
    paddingLeft: 3,
    color: '#000',
  },
  showName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 3,
  },
  description: {
    paddingLeft: 3,
    fontSize: 14,
    color: '#000',
  },
});

export default List;
