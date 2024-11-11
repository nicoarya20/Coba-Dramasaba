import { Warna } from '@/module/_global/fun/warnas';
import LayoutVerifikasi from '@/module/_global/layout/layout_verifikasi';
import { Box, Button, Flex, PinInput, Stack, Text } from '@mantine/core';
import React from 'react';

function Verifikasi() {
  return (
    <LayoutVerifikasi>
      <Box mt={20}>
        <Stack align='center'>

        <Flex direction={"column"} align={"center"} mb={20}>
          <Text fw={"bold"}>Verifikasi Nomor Telepon</Text>
          <Text fz={"sm"} fw={"inherit"}>Masukkan kode yang kami kirimkan melalui WhatsApp</Text>
          <Text fz={"sm"} fw={"inherit"}>089647037426</Text>
        </Flex>
          <PinInput size='md' length={6} type={"number"} />
          <Button mt={20} bg={Warna.bgWarna} fullWidth radius={20}>Lanjut</Button>
          <Flex direction={"row"} align={"center"} justify={"center"}>
            <Text>Tidak menerima kode verifikasi?</Text>
            <Button variant='transparent'>Kirim Ulang</Button>
          </Flex>
        </Stack>
      </Box>
    </LayoutVerifikasi>
  );
}

export default Verifikasi;
