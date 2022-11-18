import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "../../../components/forms/Input";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import ModalCariUjianGagal from "../../../components/modals/siswa/ModalCariUjianGagal";
import ModalCariUjianSukses from "../../../components/modals/siswa/ModalCariUjianSukses";
import ModalGabungUjianGagal from "../../../components/modals/siswa/ModalGabungUjianGagal";
import ModalGabungUjianSukses from "../../../components/modals/siswa/ModalGabungUjianSukses";
import SidebarSiswa, {
  NavbarSiswa,
} from "../../../components/sidebar/SidebarSiswa";
import TabsSiswa from "../../../components/tabs/siswa/TabsSiswa";

export default function UjianAndaJadwalSiswa() {
  return (
    <div className="bg-[#EFF0F3] flex text-black">
      {/* JIKA GAGAL */}
      <ModalCariUjianGagal />
      <ModalGabungUjianGagal />

      {/* JIKA SUKSES */}
      <ModalCariUjianSukses />
      <ModalGabungUjianSukses />

      <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

      <div className="mr-[24px] w-full ml-6 pl-[240px] pb-[30px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* CARI UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-sukses">
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[20px] ml-[245px]" />
              <Input
                className="flex pl-4 pr-[38px] transition duration-200 focus:outline-none rounded-[20PX] mt-3 w-[280px] h-[35PX] text-[14px] focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm"
                placeholder="Gabung Ujian"
              />
            </label>
          </div>
          <Notifications />
          <Settings />
        </div>
        <TabsSiswa />
        <h1>Halaman Jadwal</h1>
      </div>
    </div>
  );
}
