import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import DonutChart from './Components/DonutChart'
import {SvgUri} from 'react-native-svg'
import VoltageChart from './Components/VoltageChart'
import TempChart from './Components/TempChart'

const Dashboard = () => {
  return (
    <KeyboardAvoidingView className="flex flex-col justify-center py-14">
       
      <ScrollView>
      
      <View className="flex flex-row flex-wrap ml-1 h-full">

      <View className="my-1 pr-1 w-full p-6 bg-green-200 border-green-200 rounded-3xl">
      <SvgUri
    width="28px"
    height="28px"
    fill="green"
    uri="https://svgshare.com/i/z3L.svg"
      />
        <Text className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Permanent Magnet Synchronous Motor (PMSM)</Text>
        <Text className="mt-1 font-normal text-gray-500">Manufactured by Mechatronics Private Limited</Text>
        <Text className="font-normal text-gray-500">Rated Voltage: 60V </Text>
        <Text className="font-normal text-gray-500">Rated Current: 115A</Text>
        <Text className="font-normal text-gray-500">Rated RPM: 3100+-100</Text>
      </View>


        <View className="my-1 mx-1 w-48 h-48 bg-slate-200 border border-slate-200 rounded-3xl">
        <Text className="text-center mt-2 font-bold text-lg">Voltage</Text>
        <VoltageChart progress={56} fullrange={60}/>
      </View>

      <View className="my-1 mx-1 w-48 h-48 bg-slate-200 border border-slate-200 rounded-3xl">
        <Text className="text-center mt-2 font-bold text-lg">Current</Text>
        <VoltageChart progress={100} fullrange={115}/>
      </View>

      <View className="my-1 mx-1 w-48 h-48 bg-slate-200 border border-slate-200 rounded-3xl">
        <Text className="text-center mt-2 font-bold text-lg">RPM</Text>
        <VoltageChart progress={2675} fullrange={3000}/>
      </View>

      <View className="my-1 mx-1 w-48 h-48 bg-slate-200 border border-slate-200 rounded-3xl">
        <Text className="text-center mt-2 font-bold text-lg">Torque</Text>
        <VoltageChart progress={18} fullrange={28}/>
      </View>

      <View className="my-1 mx-1 w-48 h-48 bg-slate-200 border border-slate-200 rounded-3xl">
        <Text className="text-center mt-2 font-bold text-lg">Output Power</Text>
        <VoltageChart progress={5600} fullrange={7800}/>
      </View>

      <View className="my-1 mx-1 w-48 h-48 bg-slate-200 border border-slate-200 rounded-3xl">
        <Text className="text-center mt-2 font-bold text-lg">Temperature</Text>
        <TempChart progress={35} fullrange={60}/>
      </View>
     
      
      </View>
      </ScrollView>
      

      
      
    </KeyboardAvoidingView>
  )
}

export default Dashboard