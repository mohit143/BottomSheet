/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {StyleSheet, View, SafeAreaView, Image, Text, Dimensions, ScrollView,TouchableOpacity} from 'react-native';

import {BottomSheet} from './src/bottomSheet';
import {Button} from './src/components/button';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Row1Image = require('./Images/Row1.png');
const Row2Image = require('./Images/Row2.png');
const Row3Image = require('./Images/Row3.png');
const Row4Image = require('./Images/Row4.png');
const Row5Image = require('./Images/Row5.png');

function HomeScreen({ navigation }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const goToNextScreen = useCallback(() => {
    closeDrawer()
    navigation.navigate('Next')
  }, []);

  return (
    <View style={styles.flexContainer}>
        <SafeAreaView>
          <View style={[styles.buttonContainer,{backgroundColor: '#fff'}]}>
            <Button title="Open Bottom Sheet" onPress={openDrawer} />
          </View>
        </SafeAreaView>
        <BottomSheet
          isOpen={isOpen}
          openedPercentage={0.7}
          onClose={closeDrawer}>
                        <TouchableOpacity onPress = {goToNextScreen} >
                    <View style={styles.buttonContainer}>
            {/* <Button title="Close Bottom Sheet" onPress={closeDrawer} /> */}
            <Image style={styles.image} source={Row1Image} />
            <View style={{marginLeft:20/375 * (Dimensions.get('screen').width),flex:1}}>
            <Text style={{fontSize:25/375 * (Dimensions.get('screen').width),fontWeight:'500'}}>
              Transfer cash
            </Text>
            <Text style={{fontSize:20/375 * (Dimensions.get('screen').width),fontWeight:'500',color:'grey'}}>
              Add and withdraw cash
            </Text>
              </View>
          </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress = {goToNextScreen} >
          <View style={[styles.buttonContainer,{marginTop:3/375 * (Dimensions.get('screen').width)}]}>
            {/* <Button title="Close Bottom Sheet" onPress={closeDrawer} /> */}
            <Image style={styles.image} source={Row2Image} />
            <View style={{marginLeft:20/375 * (Dimensions.get('screen').width),flex:1}}>
            <Text style={{fontSize:25/375 * (Dimensions.get('screen').width),fontWeight:'500'}}>
              Save for something new
            </Text>
            <Text style={{fontSize:20/375 * (Dimensions.get('screen').width),fontWeight:'500',color:'grey'}}>
              Save and invest towards something in the future
            </Text>
              </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {goToNextScreen} >
          <View style={[styles.buttonContainer,{marginTop:3/375 * (Dimensions.get('screen').width)}]}>
            {/* <Button title="Close Bottom Sheet" onPress={closeDrawer} /> */}
            <Image style={styles.image} source={Row3Image} />
            <View style={{marginLeft:20/375 * (Dimensions.get('screen').width),flex:1}}>
            <Text style={{fontSize:25/375 * (Dimensions.get('screen').width),fontWeight:'500'}}>
              Invite Cameron
            </Text>
            <Text style={{fontSize:20/375 * (Dimensions.get('screen').width),fontWeight:'500',color:'grey'}}>
              Give Cameron access to login to their account
            </Text>
              </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {goToNextScreen} >
          <View style={[styles.buttonContainer,{marginTop:3/375 * (Dimensions.get('screen').width)}]}>
            {/* <Button title="Close Bottom Sheet" onPress={closeDrawer} /> */}
            <Image style={styles.image} source={Row4Image} />
            <View style={{marginLeft:20/375 * (Dimensions.get('screen').width),flex:1}}>
            <Text style={{fontSize:25/375 * (Dimensions.get('screen').width),fontWeight:'500'}}>
              Share profile link
            </Text>
            <Text style={{fontSize:20/375 * (Dimensions.get('screen').width),fontWeight:'500',color:'grey'}}>
              Others can signup and contribute to this account.
            </Text>
              </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {goToNextScreen} >
          <View style={[styles.buttonContainer,{marginTop:3/375 * (Dimensions.get('screen').width)}]}>
            {/* <Button title="Close Bottom Sheet" onPress={closeDrawer} /> */}
            <Image style={styles.image} source={Row4Image} />
            <View style={{marginLeft:20/375 * (Dimensions.get('screen').width),flex:1}}>
            <Text style={{fontSize:25/375 * (Dimensions.get('screen').width),fontWeight:'500'}}>
              Settings and Account Documents
            </Text>
            <Text style={{fontSize:20/375 * (Dimensions.get('screen').width),fontWeight:'500',color:'grey'}}>
              View and chabge settings. Access monthly statements, trade confirms and tax docs.
            </Text>
              </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {goToNextScreen} >
          <View style={[styles.buttonContainer,{marginTop:3/375 * (Dimensions.get('screen').width)}]}>
            {/* <Button title="Close Bottom Sheet" onPress={closeDrawer} /> */}
            <Image style={styles.image} source={Row5Image} />
            <View style={{marginLeft:20/375 * (Dimensions.get('screen').width),flex:1}}>
            <Text style={{fontSize:25/375 * (Dimensions.get('screen').width),fontWeight:'500'}} >
              Delete Account
            </Text>
            <Text style={{fontSize:20/375 * (Dimensions.get('screen').width),fontWeight:'500',color:'grey'}}>
              Remove an account that is not in use.
            </Text>
              </View>
          </View>
          </TouchableOpacity>
        </BottomSheet>
      </View>
  );
}

function NextScreen({ navigation }) {
  const goBack = useCallback(() => {
    navigation.goBack()
  }, []);
  return (
    <View style={styles.flexContainer}>
        <SafeAreaView>
          <View style={[styles.buttonContainer,{backgroundColor: 'clear',justifyContent:'center'}]}>
            <Button title="Go Back" onPress={goBack}
             />
          </View>
        </SafeAreaView>
      </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#F4F5F6'
  },
  button: {
    width: 150,
    backgroundColor: 'indigo',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: 50/375 * (Dimensions.get('screen').width),
    width: 50/375 * (Dimensions.get('screen').width),
    marginLeft:20/375 * (Dimensions.get('screen').width)
  },
  buttonText: {
    color: '#fff',
  },
});

export default App;
