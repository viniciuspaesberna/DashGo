import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from '../Header/Logo'
import { NotificationNav } from '../Header/NoficationsNav'
import { Profile } from '../Header/Profile'
import { Search } from '../Header/Search'

export function Header(){
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({ base: false, lg: true})

  return (
    <Flex
      as="header"
      maxW={1480}
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <Search />}
      
      <Flex 
        align="center"
        ml="auto"
      >
        <NotificationNav />
        
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}