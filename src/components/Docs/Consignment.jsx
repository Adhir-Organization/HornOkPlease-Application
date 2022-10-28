import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import {
  Box,
  Text,
 
 
  HStack,
 
} from "native-base";
import Icon from "react-native-vector-icons/Feather";


export default function HeroBox  (props) {
    return (
      <Box
        
        background="#E0DCDC"
        p="2"
        mt="6"
        ml="6"
        mr="6"
        borderRadius="13"
      >
        <HStack>
          <Box pt="1" >
            <Icon
              name="file"
              size={40}
              style={{ color: "#FFBE17" }}
              />
              </Box>
            <Box flexDirection={"row"}>
              <Box>

            <Text mx="3" my="3" bold >{props.DocsName}</Text> 
               </Box>
                   
               
               <Box ml="32" my="1" >
            <Icon
              name="camera"
              size={35}
              style={{ color: "black"  }} 
              
              />
              </Box> 
              </Box>
        </HStack>
      </Box>
    );
  };