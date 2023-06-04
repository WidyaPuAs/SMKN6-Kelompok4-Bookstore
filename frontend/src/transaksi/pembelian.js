import Bar from "../nav/navbar";
import JntLogo from "../assets/icons/jne.jpg";
import JneLogo from "../assets/icons/jnt.png";
import BcaLogo from "../assets/icons/bca.png";
import BniLogo from "../assets/icons/bni.png";
import OvoLogo from "../assets/icons/ovo-2.png";
import tereliyePergi from "../assets/books/tereliye-pergi.jpg";

function Halaman_Pembelian() {
  return (
    <div>
      <Bar />
      <div className="mx-auto sm:w-4/5 md:w-4/5 lg:w-4/5 h-4/5 bg-light-cream mt-14 py-4 rounded-md" id="kotak-top">
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 gap-11">
      <div class="px-4 pt-8 mt-10 bg-gray-50 lg:rounded-md lg:mb-3 lg:mt-3">
        <p class="text-xl font-medium">Rincian Pesanan</p>
        <p class="text-gray-400">Periksa item Anda. Dan pilih metode pengiriman yang sesuai.</p>
        <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={tereliyePergi} alt="" />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">Tereliye - Pergi</span>
              <span class="float-right text-gray-400">Tereliye</span>
              <p class="text-lg font-bold">Rp 85.000</p>
            </div>
          </div>
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={tereliyePergi} alt="" />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">Tereliye - Pergi</span>
              <span class="float-right text-gray-400">42EU - 8.5US</span>
              <p class="mt-auto text-lg font-bold">Rp 85.000</p>
            </div>
          </div>
        </div>

        <p class="mt-8 text-lg font-medium">Metode Pengiriman</p>
        <form class="mt-5 grid gap-6">
          <div class="relative">
            <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
              <img class="w-14 object-contain" src={JneLogo} alt="" />
              <div class="ml-5">
                <span class="mt-2 font-semibold">JNE Delivery</span>
                <p class="text-slate-500 text-sm leading-6">Waktu Pengiriman: 4-5 Hari</p>
              </div>
            </label>
          </div>
          <div class="relative mb-5">
            <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
              <img class="w-14 object-contain" src={JntLogo} alt="" />
              <div class="ml-5">
                <span class="mt-2 font-semibold">JNT Delivery</span>
                <p class="text-slate-500 text-sm leading-6">Waktu Pengiriman: 2-3 Hari</p>
              </div>
            </label>
          </div>
        </form>
      </div>

      <div class="mt-10 bg-gray-50 px-4 pt-5 lg:rounded-md lg:mb-3 lg:mt-3">
      <p class="text-lg font-medium">Metode Pembayaran</p>
        <form class="mt-5 grid gap-6 mb-5">
          <div class="relative">
            <input class="peer hidden" id="radio_3" type="radio" name="radio" checked />
            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_3">
              <img class="w-14 object-contain" src={BniLogo} alt="" />
              <div class="ml-5">
                <span class="mt-2 font-semibold">BNI</span>
                <p class="text-slate-500 text-sm leading-6">Rp 201.000</p>
              </div>
            </label>
          </div>
          <div class="relative">
            <input class="peer hidden" id="radio_4" type="radio" name="radio" checked />
            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_4">
              <img class="w-14 object-contain" src={BcaLogo} alt="" />
              <div class="ml-5">
                <span class="mt-2 font-semibold">BCA</span>
                <p class="text-slate-500 text-sm leading-6">Rp 201.000</p>
              </div>
            </label>
          </div>
          <div class="relative">
            <input class="peer hidden" id="radio_4" type="radio" name="radio" checked />
            <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_4">
              <img class="w-14 object-contain" src={OvoLogo} alt="" />
              <div class="ml-5">
                <span class="mt-2 font-semibold">Ovo</span>
                <p class="text-slate-500 text-sm leading-6">Rp 201.000</p>
              </div>
            </label>
          </div>
        </form>
        <div class="">
          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Subtotal</p>
              <p class="font-semibold text-gray-900">Rp 170.000</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Biaya Pengiriman</p>
              <p class="font-semibold text-gray-900">Rp 30.000</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Diskon</p>
              <p class="font-semibold text-gray-900">-</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Biaya Penanganan</p>
              <p class="font-semibold text-gray-900">Rp 1.000</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900">Rp 201.000</p>
          </div>
        </div>
        <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Bayar Sekarang</button>
      </div>
    </div>

   </div>
  </div>
  );
};

export default Halaman_Pembelian;