import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView
} from "react-native";
import { Block, Text} from "galio-framework";
import { Table, Row, Rows} from 'react-native-table-component';
import AsyncStorage from "@react-native-async-storage/async-storage";

const { getTrackSubasta } = require("../services/registroDeSubasta.service");
const { getProducto } = require("../services/producto.service");
const { width, height } = Dimensions.get("screen");

const TrackSubasta = (props) => {

  const [listaSubastas, setListaSubastas] = useState();
  const [tableHead, setTableHead] = useState(['ID', 'DESCRIPCION', 'VALOR']);
  const [tableData, setTableData] = useState([
                                              ['#2178', 'Puja', '250'],
                                              ['#2179', 'Puja', '300'],
                                              ['#2180', 'Puja', '320'],
                                              ['#2185', 'Puja', '360'],
                                            ]);
  return (
    
    <Block style={styles.container}>
      <Text style={{marginTop:'7%'}} center color="#3483FA" size={22}>
        Subasta #{idSubasta}
      </Text>
      <Text center color="#3483FA" bold size={22}>
        SUBASTA DE {nombreProducto}
      </Text>
      <ScrollView>
        <View style={styles.container2}>
          <Table borderStyle={{borderWidth: 2, borderColor: 'transparent'}}>
            <Row data={tableHead} style={styles.head} textStyle={styles.textHead}/>
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </View>
      </ScrollView>
      </Block>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    
    backgroundColor:'#fff'
  },
  container2: {
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff'
  },
  head: { 
    height: 40, 
    backgroundColor: '#EEBB00',
    borderRadius:10,
  },
  text: { 
    margin: 6,
    textAlign:'center',
    fontSize: 19,
    color: '#3483FA',
    
  },
  textHead: { 
    margin: 6 ,
    textAlign:'center',
    fontSize: 17,
    color:'#000000'
  }
});

export default TrackSubasta;
