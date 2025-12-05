// Supabase Yapılandırması
// NOT: Frontend uygulamasında Anon Key tarayıcıda görünür olacaktır.
// Bu normaldir - güvenlik Supabase RLS (Row Level Security) ile sağlanır.
// Service Role Key ASLA frontend'de kullanılmamalıdır!

const SUPABASE_URL = 'https://lkbjlgqxldkiwmifhizq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrYmpsZ3F4bGRraXdtaWZoaXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MTYyOTEsImV4cCI6MjA4MDQ5MjI5MX0.HJeogc9waDjHYoofLULOczCWgZK4ZK7lllfnqDD6iQQ';

// Site URL (otomatik algılanır)
const SITE_URL = window.location.origin;

// Güvenlik: Konsola bilgi yazdırmayı engelle (production'da)
if (window.location.hostname !== 'localhost') {
    console.log = function() {};
    console.debug = function() {};
    console.info = function() {};
}
