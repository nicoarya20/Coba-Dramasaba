import { AppShell, AppShellHeader, AppShellNavbar, Box, Group, Image, NavLink, Text } from '@mantine/core';
import { FaUser } from "react-icons/fa";
import { FaUserGroup, FaUserTie } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { IoIosColorPalette, IoIosHome } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { Warna } from '../fun/warnas';
const dataBeranda = [
  {
    id: 1,
    nama: "Beranda",
    icon: <IoIosHome size={30} />,
    link: "/beranda"
  },
  {
    id: 2,
    nama: "Divisi",
    icon: <MdGroups size={30} />,
    link: "/divisi"
  },
  {
    id: 3,
    nama: "Kegiatan",
    icon: <HiMiniPresentationChartBar size={30} />,
    link: "/kegiatan"
  },
  {
    id: 4,
    nama: "Pengumuman",
    icon: <GrAnnounce size={30} />,
    link: "/pengumuman"
  },
  {
    id: 5,
    nama: "Anggota",
    icon: <FaUser size={30} />,
    link: "/anggota"
  },
  {
    id: 6,
    nama: "Jabatan",
    icon: <FaUserTie size={30} />,
    link: "/jabatan"
  },
  {
    id: 7,
    nama: "Grup",
    icon: <FaUserGroup size={30} />,
    link: "/grup"
  },
  {
    id: 8,
    nama: "Tema",
    icon: <IoIosColorPalette size={30} />,
    link: "/tema"
  },


]

function LayoutBackground() {
  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 200, md: 300, lg: 350 },
        breakpoint: 'sm',
      }}
      padding={"md"}
    >
      <AppShellHeader bg={Warna.bgWarna}>
        <Box mt={15} ml={5}>
          <Group h="100%" px="md">
            <Image src={"/assets/image/logo/logo-1.png"} alt='' w={50} h={50} />
            <Text fw={"bold"}>PERBEKAL DARMASABA</Text>
          </Group>
        </Box>
      </AppShellHeader>
      <AppShellNavbar>
        {dataBeranda.map((v, i) => {
          return (
            <Box key={i}>
              <NavLink
                h={60}
                
                label={<Text>{v.nama}</Text>}
                leftSection={v.icon}
                href={v.link}
              />
            </Box>
          )
        })}
      </AppShellNavbar>

    </AppShell>
  );
}

export default LayoutBackground;
