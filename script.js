// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ==============================
// FECHAR MENU AO CLICAR
// ==============================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ==============================
// SCROLL SUAVE
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==============================
// ANO AUTOMÁTICO
// ==============================

const ano = document.querySelector("#ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}
const nomeEmpresa = document.querySelector("#empresa-nome");

if (nomeEmpresa) {
    nomeEmpresa.textContent = empresa.nome;
    nomeEmpresa.style.setProperty("--cor-destaque", empresa.corDestaque);
}

document.documentElement.style.setProperty(
    "--primary",
    tema.corPrincipal
);

const sloganEmpresa = document.querySelector("#empresa-slogan");

if (sloganEmpresa) {
    sloganEmpresa.textContent = empresa.slogan;
}

const whatsappCta = document.querySelector("#whatsapp-cta");
const whatsappFooter = document.querySelector("#whatsapp-footer");

const linkWhatsapp = `https://wa.me/${empresa.whatsapp}`;

if (whatsappCta) {
    whatsappCta.href = linkWhatsapp;
}

if (whatsappFooter) {
    whatsappFooter.href = linkWhatsapp;
}

const whatsappFloat = document.querySelector("#whatsapp-float");

if (whatsappFloat) {
    whatsappFloat.href = linkWhatsapp;
}

const instagramFooter = document.querySelector("#instagram-footer");

if (instagramFooter) {
    instagramFooter.href = `https://instagram.com/${empresa.instagram.replace("@", "")}`;
}

const enderecoEmpresa = document.querySelector("#empresa-endereco");

if (enderecoEmpresa) {
    enderecoEmpresa.textContent = empresa.endereco;
}   

// Serviços
// Serviços
const servicesGrid = document.querySelector("#services-grid");

if (servicesGrid) {

    empresa.servicos.forEach((servico, index) => {

        const numero = String(index + 1).padStart(2, "0");

        const card = document.createElement("article");
        card.classList.add("service-card");

        card.innerHTML = `
            <div class="service-image">
                <img src="${servico.imagem}" alt="${servico.alt}">
            </div>

            <div class="service-content">

                <span class="service-number">
                    ${numero}
                </span>

                <h3>
                    ${servico.titulo}
                </h3>

                <p>
                    ${servico.descricao}
                </p>

            </div>
        `;

        servicesGrid.appendChild(card);

    });

}

 // Imagens principais

const heroImagem = document.querySelector("#hero-imagem");
const sobreImagem = document.querySelector("#sobre-imagem");

if (heroImagem) {
    heroImagem.src = empresa.imagens.hero;
    heroImagem.alt = empresa.imagens.heroAlt;
}

if (sobreImagem) {
    sobreImagem.src = empresa.imagens.sobre;
    sobreImagem.alt = empresa.imagens.sobreAlt;
}

 // Sobre

const sobreTitulo = document.querySelector("#sobre-titulo");
const sobreTexto1 = document.querySelector("#sobre-texto-1");
const sobreTexto2 = document.querySelector("#sobre-texto-2");

if (sobreTitulo) {
    sobreTitulo.textContent = empresa.sobre.titulo;
}

if (sobreTexto1) {
    sobreTexto1.textContent = empresa.sobre.texto1;
}

if (sobreTexto2) {
    sobreTexto2.textContent = empresa.sobre.texto2;
}

// Diferenciais

const advantagesGrid = document.querySelector("#advantages-grid");

if (advantagesGrid) {

    empresa.diferenciais.forEach((diferencial) => {

        const card = document.createElement("div");

        card.classList.add("advantage");

        card.innerHTML = `
            <span class="advantage-icon">
                ✓
            </span>

            <h3>
                ${diferencial.titulo}
            </h3>

            <p>
                ${diferencial.descricao}
            </p>
        `;

        advantagesGrid.appendChild(card);

    });

}

// Hero

const heroTag = document.querySelector("#hero-tag");
const heroDescricao = document.querySelector("#hero-descricao");
const heroBotaoPrincipal = document.querySelector("#hero-botao-principal");
const heroBotaoSecundario = document.querySelector("#hero-botao-secundario");

if (heroTag) {
    heroTag.textContent = empresa.hero.tag;
}

if (heroDescricao) {
    heroDescricao.textContent = empresa.hero.descricao;
}

if (heroBotaoPrincipal) {
    heroBotaoPrincipal.textContent = empresa.hero.botaoPrincipal;
}

if (heroBotaoSecundario) {
    heroBotaoSecundario.textContent = empresa.hero.botaoSecundario;
}


// CTA

const ctaTag = document.querySelector("#cta-tag");
const ctaTitulo = document.querySelector("#cta-titulo");
const ctaDescricao = document.querySelector("#cta-descricao");
const ctaBotao = document.querySelector("#whatsapp-cta");

if (ctaTag) {
    ctaTag.textContent = empresa.cta.tag;
}

if (ctaTitulo) {
    ctaTitulo.textContent = empresa.cta.titulo;
}

if (ctaDescricao) {
    ctaDescricao.textContent = empresa.cta.descricao;
}

if (ctaBotao) {
    ctaBotao.textContent = empresa.cta.botao;
}

// Títulos das seções

const sobreTag = document.querySelector("#sobre-tag");

const servicosTag = document.querySelector("#servicos-tag");
const servicosTitulo = document.querySelector("#servicos-titulo");
const servicosDescricao = document.querySelector("#servicos-descricao");

const diferenciaisTag = document.querySelector("#diferenciais-tag");
const diferenciaisTitulo = document.querySelector("#diferenciais-titulo");


if (sobreTag) {
    sobreTag.textContent = empresa.secoes.sobre.tag;
}


if (servicosTag) {
    servicosTag.textContent = empresa.secoes.servicos.tag;
}

if (servicosTitulo) {
    servicosTitulo.textContent = empresa.secoes.servicos.titulo;
}

if (servicosDescricao) {
    servicosDescricao.textContent = empresa.secoes.servicos.descricao;
}


if (diferenciaisTag) {
    diferenciaisTag.textContent = empresa.secoes.diferenciais.tag;
}

if (diferenciaisTitulo) {
    diferenciaisTitulo.textContent = empresa.secoes.diferenciais.titulo;
}

// SEO

const pageTitle = document.querySelector("#page-title");
const metaDescription = document.querySelector("#meta-description");

if (pageTitle) {
    pageTitle.textContent = empresa.seo.titulo;
}

if (metaDescription) {
    metaDescription.setAttribute(
        "content",
        empresa.seo.descricao
    );
}

// Footer

const footerNome = document.querySelector("#footer-nome");
const footerDescricao = document.querySelector("#footer-descricao");
const footerCopyright = document.querySelector("#footer-copyright");
const footerDesenvolvedor = document.querySelector("#footer-desenvolvedor");

if (footerNome) {
    footerNome.textContent = empresa.nome;
}

if (footerDescricao) {
    footerDescricao.textContent = empresa.footer.descricao;
}

if (footerCopyright) {
    footerCopyright.textContent = empresa.footer.copyright;
}

if (footerDesenvolvedor) {
    footerDesenvolvedor.textContent = empresa.footer.desenvolvedor;
}

// Links internos

const links = empresa.links;

const linkInicio = document.querySelector("#link-inicio");
const linkSobre = document.querySelector("#link-sobre");
const linkServicos = document.querySelector("#link-servicos");
const linkDiferenciais = document.querySelector("#link-diferenciais");
const linkContato = document.querySelector("#link-contato");

const headerContato = document.querySelector("#header-contato");

const sobreContato = document.querySelector("#sobre-contato");

const footerLogo = document.querySelector("#footer-logo");
const footerInicio = document.querySelector("#footer-inicio");
const footerSobre = document.querySelector("#footer-sobre");
const footerServicos = document.querySelector("#footer-servicos");
const footerContato = document.querySelector("#footer-contato");

if (linkInicio) {
    linkInicio.href = links.inicio;
}

if (linkSobre) {
    linkSobre.href = links.sobre;
}

if (linkServicos) {
    linkServicos.href = links.servicos;
}

if (linkDiferenciais) {
    linkDiferenciais.href = links.diferenciais;
}

if (linkContato) {
    linkContato.href = links.contato;
}

if (headerContato) {
    headerContato.href = links.contato;
}

if (heroBotaoPrincipal) {
    heroBotaoPrincipal.href = links.contato;
}

if (heroBotaoSecundario) {
    heroBotaoSecundario.href = links.servicos;
}

if (sobreContato) {
    sobreContato.href = links.contato;
}

if (footerLogo) {
    footerLogo.href = links.inicio;
}

if (footerInicio) {
    footerInicio.href = links.inicio;
}

if (footerSobre) {
    footerSobre.href = links.sobre;
}

if (footerServicos) {
    footerServicos.href = links.servicos;
}

if (footerContato) {
    footerContato.href = links.contato;
}

const footer = document.querySelector(".footer");

if (whatsappFloat && footer) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                whatsappFloat.classList.add("hide");
            } else {
                whatsappFloat.classList.remove("hide");
            }

        });

    }, {
        threshold: 0.1
    });

    observer.observe(footer);
}

// Links do desenvolvedor

const developerWhatsapp = document.querySelector("#developer-whatsapp");
const developerInstagram = document.querySelector("#developer-instagram");
const developerPortfolio = document.querySelector("#developer-portfolio");

const linksDesenvolvedor = empresa.footer.linksDesenvolvedor;

if (developerWhatsapp) {
    developerWhatsapp.href = `https://wa.me/${linksDesenvolvedor.whatsapp}`;
}

if (developerInstagram) {
    developerInstagram.href = linksDesenvolvedor.instagram;
}

if (developerPortfolio) {
    developerPortfolio.href = linksDesenvolvedor.portfolio;
}
