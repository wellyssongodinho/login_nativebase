import { MaterialIcons } from "@expo/vector-icons";
import { Box, Button, Center, Checkbox, FormControl, Heading, HStack, Icon, Image, Input, Slider, Switch, Text, useColorMode, VStack, WarningIcon } from "native-base";
import React from 'react';

// type Props = {}
// export function SignIn({}: Props) {

export function SignIn() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Center 
            height="full"
            _dark={{ bg: 'black' }}
            _light={{ bg: 'white' }}
        >
            <Image 
                size={150} 
                borderRadius="90" 
                source = {{ uri: "https://github.com/wellyssongodinho.png" }} 
                alt="Profile" 
            />
            <VStack width="full">
                <Box 
                    width="full" 
                    padding={5} 
                    // borderColor="blue" 
                    // borderWidth={2}
                >
                    <Heading 
                        color="coolGray.700"
                        _dark={{ color: 'white' }}
                        _light={{ color: 'black' }}
                    >
                        Entrar
                    </Heading>
                    <FormControl isInvalid isRequired>
                        <FormControl.Label>E-mail</FormControl.Label>
                        <Input
                            type="text"
                            placeholder="E-mail" 
                            InputLeftElement={
                                <Icon as={<MaterialIcons name="person"/>}/>
                            }
                        />
                        {/* <FormControl.HelperText>Informe E-mail</FormControl.HelperText> */}
                        <FormControl.ErrorMessage leftIcon={<WarningIcon />}>Informe um e-mail válido</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl >
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input 
                            type="password"
                            placeholder="Password"
                            InputLeftElement={
                                <Icon as={<MaterialIcons name="lock"/>}/>
                            }
                        />
                    </FormControl>
                    <Button mt={5} colorScheme="amber">SignIn</Button>
                    <Checkbox value="agree">Termos de Aceite</Checkbox>
                    <Box alignItems="center" w="100%">
                        <Slider 
                            colorScheme={"amber"}
                            w="3/4" 
                            maxW="300" 
                            defaultValue={70} 
                            minValue={0} 
                            maxValue={100} 
                            accessibilityLabel="hello world" 
                            step={10}
                        >
                            <Slider.Track>
                            <Slider.FilledTrack />
                            </Slider.Track>
                            <Slider.Thumb />
                        </Slider>
                    </Box>
                    <HStack alignItems="center" space={4} width="100%">                    
                        <Text>Dark Mode</Text>
                        <Switch 
                            colorScheme={"amber"}
                            isChecked={colorMode === "light"}
                            onToggle={toggleColorMode}
                            aria-label={ colorMode === "light" ? "dark" : "light" }
                        />
                        <Text>Light Mode</Text>
                    </HStack>                
                </Box>
                {/* <HStack> 
                    <Checkbox value="agree"/>
                    <Text>Termo de aceite</Text>
                </HStack> */}
            </VStack>
        </Center>
    )
}
