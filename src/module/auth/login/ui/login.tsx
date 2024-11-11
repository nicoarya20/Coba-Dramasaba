"use client"
import { Warna } from '@/module/_global/fun/warnas';
import LayoutLogin from '@/module/_global/layout/layout_login';
import { Box, Button, Flex, Text, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

function Login() {
  const router = useRouter()
  return (
    <LayoutLogin>
      <TextInput
        label={<Text fz={13} mb={5}>Masukkan No.Hp</Text>}
        placeholder='+62 XXX XXX XXX XXX'
      />
      <Box>
        <Flex justify={"center"} direction={"column"}>
          <Button fullWidth onClick={()=>router.push("/verifikasi") } bg={Warna.bgWarna}>Submit</Button>
        </Flex>
      </Box>
      <Box>
        <Flex justify={"center"} direction={"row"} align={"center"}>
          <Text fz={"md"}>Jika anda tidak memiliki akun?</Text>
          <Button variant='transparent'>Registrasi</Button>
        </Flex>
      </Box>
    </LayoutLogin>
  );
}

export default Login;
