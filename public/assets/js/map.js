        // Theme setup
        (function () {
            const saved = localStorage.getItem('theme');
            const root = document.documentElement;
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            root.setAttribute('data-theme', saved || (prefersLight ? 'light' : 'dark'));
            const btn = document.getElementById('themeToggle');
            function apply(mode) { root.setAttribute('data-theme', mode); localStorage.setItem('theme', mode); }
            btn.onclick = () => apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        })();

        // Robust print handler: wait for hero image
        (function () {
            const printBtn = document.getElementById('printBtn');
            const img = document.getElementById('heroImg');
            const printNow = () => window.print();

            printBtn.onclick = () => {
                if (!img || img.complete) {
                    return printNow();
                }
                img.addEventListener('load', printNow, { once: true });
            };

            // If user presses Ctrl/Cmd+P, try to ensure the image is decoded
            window.addEventListener('beforeprint', () => {
                if (img && !img.complete) {
                    try { img.decode && img.decode(); } catch (_) { /* noop */ }
                }
            });
        })();

        // Obfuscation
        (function () {
            const t = ['+33', '7', '67', '23', '79', '79'];
            const tel = `${t.join('')}`; // e.g., +33767237979
            const a = 'david', b = 'asquiedge';
            document.getElementById('tel').innerHTML = `<a href="tel:${tel}">${t[0]} ${t[1]} ** ** ** **</a>`;
            document.getElementById('email').innerHTML = `<a href="mailto:${a}@${b}.com">${a[0]}****@${b[0]}*******${b[8]}.com</a>`;
        })();