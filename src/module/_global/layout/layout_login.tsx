import { Box, Card, Flex, Image, Stack, Title } from '@mantine/core';
import React from 'react';

function LayoutLogin({children}: {children: React.ReactNode}) {
  return (
    <Box>
      <Box>
        <Stack p={20} align='center' justify='center' h={"100vh"}>
          <Card withBorder p={50}>
            <Stack>
              <Title ta={"center"} order={2}>LOGIN</Title>
              <Flex align={"center"} justify={"center"} direction={"column"}>
              <Image src={"/assets/image/logo/logo-1.png"} alt='' w={250} h={250} />
              <Title ta={"center"} order={3}>PERBEKAL DARMASABA</Title>
              </Flex>
              {children}
            </Stack>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
}

export default LayoutLogin;
