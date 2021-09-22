/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Text,
  TouchableOpacity,
  // TextInput,
  StatusBar,
  ScrollView,
  View,
  FlatList,
  Image,
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/dist/Entypo';
//  import Fontisto from 'react-native-vector-icons/dist/Fontisto';//Ionicons
//  import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import styles from '../../styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

const Home = () => {
 // let days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday','Saturday']; //new Date().getDay();
  const dayIndex = new Date().getDay();
const getDayName = (dayIndex) =>{
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[dayIndex];
}
  
  let data1 = [
    {
      id: '1',
      name: 'Rick Adams',
      address: '5519 skidmore Portland',
      status: 'Approved',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeeYSmxB7eaO7MP7JuKxfz-inXSUsLSDpX19_rIXN0Ya-6y8eLgShrjD12SI-mhM3V5I&usqp=CAU',
      backColor: '#79c179',
      time: '8 am',
      duration: '30 min',
    },
    {
      id: '2',
      name: 'Rick Adams',
      address: '5519 skidmore Portland',
      status: 'Pending',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeeYSmxB7eaO7MP7JuKxfz-inXSUsLSDpX19_rIXN0Ya-6y8eLgShrjD12SI-mhM3V5I&usqp=CAU',
      backColor: '#ffa233',
      time: '9 am',
      duration: '60 min',
    },
  ];
  let data2 = [
    {
      id: '1',
      name: 'Rick Adams',
      address: '5519 skidmore Portland',
      status: 'Buyer Reschedule',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeeYSmxB7eaO7MP7JuKxfz-inXSUsLSDpX19_rIXN0Ya-6y8eLgShrjD12SI-mhM3V5I&usqp=CAU',
      backColor: '#2c2c2c',
      time: '8 am',
      duration: '30 min',
    },
  ];

  let datesWhitelist = [
    {
      start: moment(),
      end: moment().add(1, 'days'), // total 4 days enabled
    },
  ];
  let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled
  const labels = [" 8 AM (30 Min)"," 9 AM (90 Min)"];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor:    data1[0].backColor  ,//'#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor:data1[1].backColor ,//'#ffffff',
    stepIndicatorCurrentColor: data1[0].backColor ,// '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: data1[0].backColor,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#2c2c2c',
    labelSize: 13,
    currentStepLabelColor: '#2c2c2c'
  }
  const labels2 = ["8 AM (30 Min)"];
  const customStyles2 = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor:    data2[0].backColor  ,//'#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor:data2[0].backColor ,//'#ffffff',
    stepIndicatorCurrentColor: data2[0].backColor ,// '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: data2[0].backColor,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#2c2c2c',
    labelSize: 13,
    currentStepLabelColor: '#2c2c2c'
  }
  // Faiz ullah
  return (
    <View style={styles.container}>
           
      <ScrollView>
        <View style={{height:hp(8),width:wp(100),alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <Text style={{fontSize:RFPercentage(2.4),fontWeight:'800',textAlign:'center',marginTop:hp(2)}}>Calendar</Text>
        </View>
      <View
        style={{
          height: hp(13),
          width: wp(100),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#d3d3d3',
          flexDirection: 'row',
          shadowOpacity:'0.2'
        }}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
          {moment().format('MMMM').substring(0, 3)}
        </Text>
        <CalendarStrip
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{type: 'border'}}
          highlightDateContainerStyle={{
            backgroundColor: '#333',
            width: hp(5.5),
            height: hp(8),
            borderRadius: hp(0.9),
          }}
          // dayContainerStyle={{backgroundColor:'#333',width:hp(5.5),height:hp(8),borderRadius:hp(0.9)}}
          style={{
            height: hp(12),
            width: wp(80),
            paddingTop: 2,
            paddingBottom: 12,
          }}
          leftSelector={[]}
          rightSelector={[]}
       //   setSelectedDate={new Date().getDate()}
          calendarHeaderStyle={{color: 'white'}}
          calendarColor={'#d3d3d3'}
          dateNumberStyle={{color: '#333'}}
          dateNameStyle={{color: '#333'}}
          highlightDateNumberStyle={{color: 'white'}}
          highlightDateNameStyle={{color: 'white'}}
          disabledDateNameStyle={{color: '#333'}}
          disabledDateNumberStyle={{color: '#333'}}
          datesWhitelist={datesWhitelist}
          datesBlacklist={datesBlacklist}
          headerText=" "
         //iconContainer={{flex: 0.1}}
          
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 17,
          margin: 10,
        }}>
        {' '}
        {getDayName(dayIndex)} {new Date().getDate()}{' '}
        {moment().format('MMMM')} {moment().format('YYYY')}
      </Text>
      <View style={{width: wp(100), height: hp(46), flexDirection: 'row'}}>
       <View  style={{
              height: hp(46),
              width: wp(20),
              alignItems:'center',
        
            }}>
      
      <View
            style={{
              height: hp(45),
              width: wp(15),
            }}>

      <StepIndicator
      
         customStyles={customStyles}
         direction='vertical'
         stepCount={data1.length}
         renderStepIndicator={()=>{return <Text></Text>}}
       //  currentPosition={this.state.currentPosition}
         labels={labels}
       />
             
       </View>
       </View> 
      
        <View style={{height: hp(46), width: wp(80)}}>
          <FlatList
            // style={{width:wp(100),height:hp(60)}}
            data={data1}
            renderItem={({item, index, separators}) => (
              
               
                <TouchableOpacity
                  style={{
                    width: wp(70),
                    height: hp(20),
                    alignItems: 'center',
                    marginTop: hp(2),
                    marginLeft: wp(5),
                  }}
                  key={index}
                  // onPress={() => this._onPress(item)}
                  onShowUnderlay={separators.highlight}
                  onHideUnderlay={separators.unhighlight}>
                  <View
                    style={{
                      width: wp(70),
                      height: hp(20),
                      backgroundColor: 'white',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      backgroundColor: item.backColor,
                      borderRadius: hp(2),
                    }}>
                    <View style={{flexDirection: 'column', marginLeft: wp(2)}}>
                      <Text style={{color: 'white', paddingTop: hp(1)}}>
                        {' '}
                        <Icon
                          name="location-pin"
                          color="white"
                          size={hp(3)}
                        />{' '}
                        {item.address}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: hp(9),
                          marginBottom: hp(1),
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            width: hp(6),
                            height: hp(6),
                            borderRadius: hp(0.1),
                            backgroundColor: '#d3d3d3',
                            marginLeft: wp(1),
                          }}
                          source={require('../assets/imgapp.jpg')}
                          resizeMode="cover"
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            paddingLeft: wp(3),
                          }}>
                          {item.name}
                        </Text>
                      </View>

                      <TouchableOpacity
                        style={{
                          height: hp(4),
                          width: wp(20),
                          borderRadius: hp(2),
                          backgroundColor: 'white',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: item.backColor,
                            fontSize: RFPercentage(2),
                          }}>
                          {item.status}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
   
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 17,
          margin: 2,
        }}>
        {' '}
        {getDayName(dayIndex+1)} {new Date().getDate()}{' '}
        {moment().format('MMMM')} {moment().format('YYYY')}
      </Text>
      <View style={{width: wp(100), height: hp(46), flexDirection: 'row'}}>
       <View  style={{
              height: hp(46),
              width: wp(20),
              alignItems:'center',
        
            }}>
      
      <View
            style={{
              height: hp(20),
              width: wp(15),
            }}>

      <StepIndicator
      
         customStyles={customStyles2}
         direction='vertical'
         stepCount={data2.length}
         renderStepIndicator={()=>{return <Text></Text>}}
       //  currentPosition={this.state.currentPosition}
         labels={labels2}
       />
             
       </View>
       </View> 
      
        <View style={{height: hp(46), width: wp(80)}}>
          <FlatList
            // style={{width:wp(100),height:hp(60)}}
            data={data2}
            renderItem={({item, index, separators}) => (
              
               
                <TouchableOpacity
                  style={{
                    width: wp(70),
                    height: hp(20),
                    alignItems: 'center',
                    marginTop: hp(2),
                    marginLeft: wp(5),
                  }}
                  key={index}
                  // onPress={() => this._onPress(item)}
                  onShowUnderlay={separators.highlight}
                  onHideUnderlay={separators.unhighlight}>
                  <View
                    style={{
                      width: wp(70),
                      height: hp(20),
                      backgroundColor: 'white',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      backgroundColor: item.backColor,
                      borderRadius: hp(2),
                    }}>
                    <View style={{flexDirection: 'column', marginLeft: wp(2)}}>
                      <Text style={{color: 'white', paddingTop: hp(1)}}>
                        {' '}
                        <Icon
                          name="location-pin"
                          color="white"
                          size={hp(3)}
                        />{' '}
                        {item.address}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: hp(9),
                          marginBottom: hp(1),
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            width: hp(6),
                            height: hp(6),
                            borderRadius: hp(0.1),
                            backgroundColor: '#d3d3d3',
                            marginLeft: wp(1),
                          }}
                          source={require('../assets/imgapp.jpg')}
                          resizeMode="cover"
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            color: 'white',
                            paddingLeft: wp(3),
                          }}>
                          {item.name}
                        </Text>
                      </View>

                      <TouchableOpacity
                        style={{
                          height: hp(4),
                          width: wp(35),
                          borderRadius: hp(2),
                          backgroundColor: 'white',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: item.backColor,
                            fontSize: RFPercentage(2),
                          }}>
                          {item.status}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
   
        
        </ScrollView>       
   
    </View>
  );
};

export default Home;
