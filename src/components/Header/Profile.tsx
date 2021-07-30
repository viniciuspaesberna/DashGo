import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps){
  return (
    <Flex align="center">
      {showProfileData && 
        <Box mr="4" textAlign="right">
          <Text>Vinicius Paes Berna</Text>
          <Text color="gray.300" fontSize="small">
            vini_berna2.0@hotmail.com
          </Text>
        </Box>
      }
        <Avatar size="md" name="Vinicius Paes Berna" src=""/>
    </Flex>      
  )
}