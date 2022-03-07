import React, { useState } from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, NativeBaseProvider } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import DateTask from '../Datetest';
import { TextInputMask } from 'react-native-masked-text';

export default function Tasks({}) {

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputDate, setInputDate] = useState("")

  const addItem = ({ inputValue, inputDate }) => {
    setList([...list, {
      title: inputValue,
      isCompleted: false,
      date: inputDate,
    }]);
  };

  const handleDelete = index => {
    const temp = list.filter((_, itemI) => itemI !== index);
    setList(temp);
  };

  const handleStatusChange = index => {
    const temp = list.map((item, itemI) => itemI !== index ? item : {
      ...item,
      isCompleted: !item.isCompleted
    });
    setList(temp);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box maxW="500" w="100%">
          <Heading mb="2" size="md">
            MY AGENDA
          </Heading>
          <VStack space={4}>
            <HStack space={2}>
              <Input
                flex={1}
                onChangeText={v => setInputValue(v)}
                value={inputValue}
                placeholder="Add name task" />
              <TextInputMask
                type={'datetime'}
                options={{ format: 'YYYY-MM-DD' }}
                value={inputDate}
                onChangeText={v => setInputDate(v)}
                placeholder="Date: YYYY-MM-DD"
              />
              <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => {
                addItem({ inputValue, inputDate });
                setInputValue("");
                setInputDate("");
              }} />
            </HStack>
            <VStack space={2}>
              {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}>
                  <Text mx="2" strikeThrough={item.isCompleted} _light={{
                    color: item.isCompleted ? "gray.400" : "coolGray.800"
                  }} _dark={{
                    color: item.isCompleted ? "gray.400" : "coolGray.50"
                  }}>
                    {item.title}
                    <DateTask date={item.date} />
                  </Text>
                </Checkbox>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
              </HStack>)}
            </VStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
};