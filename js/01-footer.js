class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div id="footer_container">
                    <p>
                        <a id="footer_imprint" href="/infomorgen/pages/imprint.html" target="_blank">Impressum</a>
                    </p>
                    <hr id="footer_line">
                    <div id="footer_bottom">
                        <p id="footer_revision">
                            Version 1.0, Stand 25.12.2022
                        </p>
                        <p id="footer_copyright">
                            © 2022 Sunrise GmbH
                        </p>
                        <p class="footer_sunrise">
                            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.917 3.03184C16.789 2.99875 16.6546 2.99094 16.5219 3.01028C16.3488 3.00345 16.1748 3 16 3C15.8252 3 15.6512 3.00345 15.4781 3.01028C15.3454 2.99094 15.211 2.99875 15.083 3.03184C8.33118 3.50235 3 9.12859 3 16C3 22.8714 8.33118 28.4976 15.083 28.9682C15.211 29.0012 15.3454 29.0091 15.4781 28.9897C15.6512 28.9965 15.8252 29 16 29C16.1748 29 16.3488 28.9965 16.5219 28.9897C16.6546 29.0091 16.789 29.0012 16.917 28.9682C23.6688 28.4976 29 22.8714 29 16C29 9.12859 23.6688 3.50235 16.917 3.03184ZM15.896 5.00048C15.9306 5.00016 15.9653 5 16 5C16.0347 5 16.0694 5.00016 16.104 5.00048C17.2089 6.87548 18.0205 8.89873 18.5189 11H13.4811C13.9795 8.89873 14.7911 6.87548 15.896 5.00048ZM13.4553 5.29582C10.286 6.04642 7.64705 8.16813 6.19942 11H11.4305C11.8576 9.0237 12.5372 7.10622 13.4553 5.29582ZM11.0872 13H5.41406C5.14433 13.9537 5 14.96 5 16C5 17.04 5.14433 18.0463 5.41406 19H11.0872C10.9605 18.0085 10.8963 17.0065 10.8963 16C10.8963 14.9935 10.9605 13.9915 11.0872 13ZM11.4305 21H6.19942C7.64705 23.8319 10.286 25.9536 13.4553 26.7042C12.5372 24.8938 11.8576 22.9763 11.4305 21ZM15.896 26.9995C14.7911 25.1245 13.9795 23.1013 13.4811 21H18.5189C18.0205 23.1013 17.2089 25.1245 16.104 26.9995C16.0694 26.9998 16.0347 27 16 27C15.9653 27 15.9306 26.9998 15.896 26.9995ZM18.5447 26.7042C21.714 25.9536 24.3529 23.8319 25.8006 21H20.5695C20.1424 22.9763 19.4628 24.8938 18.5447 26.7042ZM20.9128 19H26.5859C26.8557 18.0463 27 17.04 27 16C27 14.96 26.8557 13.9537 26.5859 13H20.9128C21.0395 13.9915 21.1037 14.9935 21.1037 16C21.1037 17.0065 21.0395 18.0085 20.9128 19ZM18.895 13H13.105C12.9665 13.9904 12.8963 14.9927 12.8963 16C12.8963 17.0073 12.9665 18.0096 13.105 19H18.895C19.0335 18.0096 19.1037 17.0073 19.1037 16C19.1037 14.9927 19.0335 13.9904 18.895 13ZM20.5695 11C20.1424 9.0237 19.4628 7.10622 18.5447 5.29582C21.714 6.04642 24.3529 8.16813 25.8006 11H20.5695Z" fill="#DA291C"/> </svg>
                            <a class="footer_sunrise" href="https://www.sunrise.ch/de/" target="_blank">Sunrise.ch</a>
                        </p>
                    </div>
                </div>
            </footer>
        `
    }
}
customElements.define('custom-footer', CustomFooter)