"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeatpumpPage() {
  const searchParams = useSearchParams();
  const signupId = searchParams.get("signupId");

  const [submitted, setSubmitted] = useState(false);
  const [lastName, setLastName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!signupId) return;

      try {
        const res = await fetch(`/api/user?signupId=${signupId}`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);

        const data = await res.json();
        setLastName(data.lastName);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [signupId]);

  const handleSubmit = async () => {

    // Mock API Call
    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ signupId }),
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-green-700 mb-2">Vielen Dank!</h1>
        <p className="text-gray-700">
          Wir haben Ihr Interesse an einer Wärmepumpe erfolgreich registriert.
          Ein Enpal-Berater meldet sich in Kürze bei Ihnen.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5F2] text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-3 xl:px-20">

          <Image
            src="/enpal-logo.svg"
            alt="Enpal Logo"
            width={160}
            height={36}
            className="w-28 md:w-40"
          />

          <div className="flex items-center gap-3 text-xs text-gray-700">
            <Image
              src="/trustpilot-logo.png"
              alt="Trustpilot"
              width={100}
              height={20}
              className="w-18 md:w-25"
            />
            <span className="text-[10px] md:text-[14px]">
              <span className="font-semibold ">4.1 / 5 </span> Sterne
              <span className="hidden sm:inline"> bei Trustpilot</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center px-8 sm:px-14 md:px-20 py-10 md:py-14 lg:py-24 xl:py-30 gap-16 lg:gap-20 xl:gap-30 2xl:gap-40">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-[#072543]">
            Wärmepumpe
            <span className="hidden lg:inline"><br /></span>
            <span className="sm:hidden"><br /> </span>
            <span className="text-[#ffb000]"> bei Enpal</span>
          </h1>


          <p className="text-md sm:text-lg text-[#6a7c8e] sm:mb-6 mb-7 2xl:w-[450px] w-auto leading-relaxed">
            {lastName && (
              <>
                Liebe Familie <span className="font-semibold">{lastName}</span>,{' '}
              </>
            )}
            sparen Sie mit Ihrer Solaranlage bis zu 75 % Energiekosten und bis zu 2.000 € jährlich, wenn Sie Ihre Wärmepumpe jetzt installieren lassen.
            Sie steht in nur 30 Tagen bereit, inklusive flexibler Finanzierung und staatlicher Förderung.
          </p>

          <button
            onClick={handleSubmit}
            className="bg-[#ffd233] text-[#072543] sm:px-10 md:px-14 px-6 py-4 md:py-5 rounded-[14px] text-lg font-semibold hover:bg-[#ffdd66] transition cursor-pointer flex items-center gap-2"
          >
            Angebot sichern
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        <video
          src="/heatpump-product.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="mt-0 rounded-xl shadow-2xl w-full max-w-[725px] lg:max-w-[500px] xl:max-w-[575px] 2xl:max-w-[725px]"
        />
      </section>

      {/* Zertifikate Section */}
      <section className="py-16 overflow-hidden">
        <div className="text-center mb-10 px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Vielfach ausgezeichnet</h2>
          <p className="text-gray-600 sm:text-lg text-md mt-2">
            Auszeichnungen, Testergebnisse & Zertifikate von Enpal
          </p>
        </div>

        {/* Laufband-Container */}
        <div className="relative overflow-hidden fade-mask mx-auto max-w-[1400px]">
          <div className="animate-scroll-left flex items-center">

            {/* --- Alle Zertifikate einmal --- */}
            <div className="flex gap-24 items-center">
              <Image src="/chip.svg" alt="Chip Testsieger" width={120} height={120} className="object-contain" />
              <Image src="/next.png" alt="Marktführer 2024" width={150} height={120} className="object-contain" />
              <Image src="/tuev.svg" alt="TÜV Kundenzufriedenheit" width={140} height={120} className="object-contain" />
              <Image src="/forbes.svg" alt="Forbes" width={150} height={120} className="object-contain" />
              <Image src="/vde.png" alt="VDE Zertifizierung" width={140} height={120} className="object-contain" />
              <Image src="/welt.png" alt="Welt Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/testsieger.svg" alt="Testsieger Zertifizierung" width={200} height={120} className="object-contain" />
              <Image src="/b2c.svg" alt="B2c Zertifizierung" width={180} height={120} className="object-contain" />
              <Image src="/efahrer.svg" alt="Efahrer Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/life award.svg" alt="life award Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/waermepumpe.svg" alt="waermepumpe Zertifizierung" width={200} height={120} className="object-contain" />
              <Image src="/faz2.png" alt="faz Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/financial.png" alt="financial Zertifizierung" width={150} height={120} className="object-contain" />
              <Image src="/smarthome.png" alt="smarthome Zertifizierung" width={110} height={120} className="object-contain" />
              <Image src="/kfw.svg" alt="kfw Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/coporate.svg" alt="coporate Zertifizierung" width={220} height={120} className="object-contain" />
            </div>

            {/* --- Spacer --- */}
            <div className="w-24" />

            {/* --- Und nochmal, für den Endlos-Loop --- */}
            <div className="flex gap-24 items-center">
              <Image src="/chip.svg" alt="Chip Testsieger" width={120} height={120} className="object-contain" />
              <Image src="/next.png" alt="Marktführer 2024" width={150} height={120} className="object-contain" />
              <Image src="/tuev.svg" alt="TÜV Kundenzufriedenheit" width={140} height={120} className="object-contain" />
              <Image src="/forbes.svg" alt="Forbes" width={150} height={120} className="object-contain" />
              <Image src="/vde.png" alt="VDE Zertifizierung" width={140} height={120} className="object-contain" />
              <Image src="/welt.png" alt="Welt Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/testsieger.svg" alt="Testsieger Zertifizierung" width={200} height={120} className="object-contain" />
              <Image src="/b2c.svg" alt="B2c Zertifizierung" width={180} height={120} className="object-contain" />
              <Image src="/efahrer.svg" alt="Efahrer Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/life award.svg" alt="life award Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/waermepumpe.svg" alt="waermepumpe Zertifizierung" width={200} height={120} className="object-contain" />
              <Image src="/faz2.png" alt="faz Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/financial.png" alt="financial Zertifizierung" width={150} height={120} className="object-contain" />
              <Image src="/smarthome.png" alt="smarthome Zertifizierung" width={110} height={120} className="object-contain" />
              <Image src="/kfw.svg" alt="kfw Zertifizierung" width={120} height={120} className="object-contain" />
              <Image src="/coporate.svg" alt="coporate Zertifizierung" width={220} height={120} className="object-contain" />
            </div>
            <div className="w-[100px] shrink-0" />

          </div>
        </div>
      </section>

    </main>
  );
}
