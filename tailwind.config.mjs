/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          turquoise: '#1A8B93', // Logodaki ana turkuaz (MV harfleri)
          gold: '#E8A359',      // El ve ayak figüründeki altın/hardal sarısı
          dark: '#1f2937',      // Temel metin rengi (okunabilirliği yüksek koyu gri)
          light: '#f3f4f6',     // Bölüm arka planları için ferah açık gri
        }
      },
      fontFamily: {
        // Modern ve temiz bir tipografi için Inter veya benzeri bir sans-serif
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}