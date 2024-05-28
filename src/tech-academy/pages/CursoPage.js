import React from "react";
import "../styles/homePage.css";
import "../styles/cursoPage.css"
import { Link } from "react-router-dom";

import bgIndex from "../../assets/imgs/bg-index.webp";
import userMale from "../../assets/imgs/user-male.webp";
import userFemale from "../../assets/imgs/user-female.png";

import cursoUi from "../../assets/imgs/ui-curso.jpg";
import cursoUx from "../../assets/imgs/ux-curso.jpg";
import cursoDesignThinking from "../../assets/imgs/curso-design-thinking.png";

import cursoDevWeb from "../../assets/imgs/curso-desenvolvimento-web-completo.png";
import cursoResponsiveWeb from "../../assets/imgs/curso-design-responsivo-web.jpg";
import cursoReact from "../../assets/imgs/react-js-curso.jpg";

import cursoNode from "../../assets/imgs/curso-node-js.jpeg";
import cursoDjango from "../../assets/imgs/curso-django-web.webp";
import cursoMongoDb from "../../assets/imgs/curso-node-mogo-db.png";

const CursoPage = () => {
  const cursos = [
    {
      id: 1,
      nome: "Curso de Design de Interface do Usuário (UI Design)",
      descricao:
        "Este curso fornecerá uma compreensão abrangente dos princípios fundamentais do design de interface do usuário (UI). Você aprenderá sobre layout, tipografia, cores, design responsivo e muito mais. Além disso, você terá a oportunidade de praticar suas habilidades por meio de projetos práticos que refletem desafios reais da indústria.",
      capa: cursoUi,
      videos: ["", "", ""],
    },
    {
      id: 2,
      nome: "Curso de Experiência do Usuário (UX Design)",
      descricao:
        "Este curso abordará os conceitos essenciais de design de experiência do usuário (UX), incluindo pesquisa de usuários, wireframing, prototipagem e testes de usabilidade. Você aprenderá a criar experiências digitais envolventes e intuitivas que atendam às necessidades e expectativas dos usuários.",
      capa: cursoUx,
      videos: ["", "", ""],
    },
    {
      id: 3,
      nome: "Curso de Design Thinking",
      descricao:
        "O design thinking é uma abordagem centrada no ser humano para resolver problemas complexos. Este curso irá guiá-lo através do processo de design thinking, desde a compreensão do problema até a prototipagem e iteração. Você aprenderá a pensar de forma criativa e inovadora para criar soluções eficazes de UX/UI.",
      capa: cursoDesignThinking,
      videos: ["", "", ""],
    },
    {
      id: 4,
      nome: "Curso de Desenvolvimento Web Completo (HTML, CSS, JavaScript)",
      descricao:
        "Este curso abrangente cobre os fundamentos do desenvolvimento web, incluindo HTML, CSS e JavaScript. Você aprenderá a criar layouts responsivos, estilizar páginas da web com CSS e adicionar interatividade usando JavaScript. Além disso, o curso pode incluir frameworks populares, como Bootstrap para design responsivo.",
      capa: cursoDevWeb,
      videos: ["", "", ""],
    },
    {
      id: 5,
      nome: "Curso de Desenvolvimento Web Responsivo e Acessível",
      descricao:
        "Este curso se concentra em criar experiências web que sejam responsivas em diferentes dispositivos e acessíveis para todos os usuários. Você aprenderá técnicas avançadas de design responsivo, como flexbox e grid layout, além de práticas de acessibilidade para garantir que suas aplicações sejam utilizáveis por pessoas com deficiências.",
      capa: cursoResponsiveWeb,
      videos: ["", "", ""],
    },
    {
      id: 6,
      nome: "Curso Avançado de React.js: Construindo Aplicações Web Modernas",
      descricao:
        "Este curso avançado concentra-se no framework React.js, abordando componentização, gerenciamento de estado, roteamento, hooks e tópicos avançados como renderização condicional, comunicação entre componentes e integração de APIs. Projetos práticos são incluídos para reforçar o aprendizado.",
      capa: cursoReact,
      videos: ["", "", ""],
    },
    {
      id: 7,
      nome: "Curso de Desenvolvimento Web com Node.js",
      descricao:
        "Este curso abrange o desenvolvimento back-end com Node.js, uma plataforma JavaScript amplamente utilizada para construir aplicativos web escaláveis e eficientes. Você aprenderá sobre conceitos como manipulação de requisições HTTP, criação de APIs RESTful, integração de bancos de dados e autenticação de usuários. Projetos práticos ajudarão a consolidar seus conhecimentos.",
      capa: cursoNode,
      videos: ["", "", ""],
    },
    {
      id: 8,
      nome: "Curso Completo de Desenvolvimento Web com Django",
      descricao:
        "Este curso foca no framework Python Django para desenvolvimento web back-end. Você aprenderá a construir aplicativos web robustos, desde a configuração inicial até a implementação de recursos avançados, como autenticação de usuários, CRUD (Create, Read, Update, Delete), e integração de APIs de terceiros. O curso também pode cobrir tópicos como segurança e escalabilidade.",
      capa: cursoDjango,
      videos: ["", "", ""],
    },
    {
      id: 9,
      nome: "Curso de Desenvolvimento de APIs com Express.js e MongoDB",
      descricao:
        "Este curso se concentra na criação de APIs RESTful utilizando o framework Express.js, juntamente com um banco de dados NoSQL como o MongoDB. Você aprenderá a projetar e implementar endpoints de API, lidar com autenticação de usuários, validação de dados, e implementar operações CRUD. Projetos práticos permitirão que você aplique seus conhecimentos em cenários do mundo real.",
      capa: cursoMongoDb,
      videos: ["", "", ""],
    },
  ];

  return (
    <div className="principal">
      {/* Seção de topo */}
      <div className="topo" id="home">
        <h1>Tech Academy a Melhor Escola Tech</h1>
        <img src={bgIndex} alt="imagem tecnologia" />
      </div>

      {/* Seção de quem somos */}
      <div id="quem-somos">
        <div className="container">
        <h2>Quem Somos</h2>
          <p>
            Bem-vindo à <strong>Tech Academy</strong> , seu destino definitivo
            para aprendizado de tecnologia de ponta. Fundada por entusiastas da
            tecnologia com décadas de experiência combinada no setor, nossa
            missão é capacitar indivíduos e empresas com o conhecimento e as
            habilidades necessárias para prosperar na era digital.
          </p>
          <p>
            Na <strong>Tech Academy</strong> , acreditamos que a educação é a
            chave para desbloquear todo o potencial da tecnologia. Por isso,
            oferecemos uma ampla gama de cursos online, ministrados por
            instrutores especializados que estão na vanguarda de suas
            respectivas áreas. De desenvolvimento web e mobile a ciência de
            dados, inteligência artificial e segurança cibernética, nossos
            cursos são projetados para atender tanto a iniciantes quanto a
            profissionais experientes em busca de aprimoramento.
          </p>
          <p>
            Nossa abordagem centrada no aluno coloca você no controle de sua
            jornada de aprendizado. Com a flexibilidade de estudar no seu
            próprio ritmo e acessar materiais de alta qualidade a qualquer
            momento e de qualquer lugar, estamos aqui para apoiá-lo em cada
            etapa do caminho. Além disso, nossa plataforma intuitiva e amigável
            torna a experiência de aprendizado online simples e envolvente.
          </p>
          <p>
            Na <strong>Tech Academy</strong> , não apenas fornecemos
            conhecimento teórico, mas também enfatizamos a aplicação prática.
            Nossos cursos são projetados para que você possa adquirir
            habilidades práticas diretamente relevantes para o mercado de
            trabalho atual. Estamos comprometidos em prepará-lo não apenas para
            os desafios de hoje, mas também para as oportunidades do futuro.
          </p>
          <p>
            Junte-se a nós na <strong>Tech Academy </strong> e embarque em uma
            jornada emocionante de descoberta, crescimento e sucesso na
            tecnologia. Estamos aqui para ajudá-lo a transformar suas paixões em
            carreiras e suas ideias em inovações. O futuro da tecnologia começa
            aqui. Seja bem-vindo à Tech Academy.
          </p>
        </div>
      </div>

      {/* Seção de cursos de UI e UX Design */}
      <div id="cursos">
        <div className="container">
          <h2>UI e UX Design</h2>
        </div>
        <div className="container cursos-container">
          {cursos.map((c) => {
            return (
              <div className="cursos-card" key={c.id}>
                <img src={c.capa} alt={c.nome} />
                <h3>{c.nome}</h3>
                <p>{c.descricao}</p>

                <Link to="/cadastro">
                  <strong>ASSISTIR AULA</strong>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Seção de cursos de Front-end Developer */}
      <div id="cursos">
        <div className="container">
          <h2>Front-end Developer</h2>
        </div>
        <div className="container cursos-container">
          {/* Mapeando e exibindo cursos de Front-end Developer */}
          {cursos
            .filter((c) => c.id >= 4 && c.id <= 6)
            .map((c) => {
              return (
                <div className="cursos-card" key={c.id}>
                  <img src={c.capa} alt={c.nome} />
                  <h3>{c.nome}</h3>
                  <p>{c.descricao}</p>

                  <Link to="/cadastro">
                    <strong>ASSISTIR AULA</strong>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      {/* Seção de cursos de Back-end Developer */}
      <div id="cursos">
        <div className="container">
          <h2>Back-end Developer</h2>
        </div>
        <div className="container cursos-container">
          {/* Mapeando e exibindo cursos de Back-end Developer */}
          {cursos
            .filter((c) => c.id >= 7 && c.id <= 9)
            .map((c) => {
              return (
                <div className="cursos-card" key={c.id}>
                  <img src={c.capa} alt={c.nome} />
                  <h3>{c.nome}</h3>
                  <p>{c.descricao}</p>

                  <Link to="/cadastro">
                    <strong>ASSISTIR AULA</strong>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      {/* Seção de depoimentos */}
      <div id="depoimentos">
        <div className="container">
          <h2>Depoimentos</h2>
        </div>
        <div className="container">
         {/* Depoimento 1 */}
    <div className="depoimentos-card">
      <img src={userFemale} alt="imagem usuário" />
      <div>
        <strong>Maria Silva, Desenvolvedora Web Júnior</strong>
        <p>
          "A Tech Academy foi fundamental para minha transição de carreira para o desenvolvimento web. Os cursos são muito bem estruturados e os instrutores são incríveis. Aprendi não apenas as habilidades técnicas necessárias, mas também ganhei confiança para enfrentar desafios reais no mercado de trabalho. Recomendo a Tech Academy para qualquer pessoa que queira avançar em sua carreira de tecnologia!"
        </p>
      </div>
    </div>
    {/* Depoimento 2 */}
    <div className="depoimentos-card reverse">
      <img src={userMale} alt="imagem usuário" />
      <div>
        <strong>Pedro Oliveira, Empreendedor Digital</strong>
        <p>
          "Como empreendedor, sempre busquei maneiras de aprimorar minhas habilidades técnicas para melhorar meus produtos digitais. Os cursos da Tech Academy me proporcionaram conhecimentos valiosos em desenvolvimento frontend e backend, permitindo-me criar soluções mais robustas e inovadoras. A flexibilidade dos cursos online também se encaixa perfeitamente na minha agenda agitada. Estou muito satisfeito com minha experiência na Tech Academy!"
        </p>
      </div>
    </div>
    {/* Depoimento 3 */}
    <div className="depoimentos-card">
      <img src={userFemale} alt="imagem usuário" />
      <div>
        <strong>Ana Santos, Estudante Universitária</strong>
        <p>
          "Estudar na Tech Academy tem sido uma experiência incrível para complementar minha formação universitária. Os cursos são muito acessíveis e abrangentes, e os recursos de aprendizado são de alta qualidade. Além disso, a comunidade de alunos e instrutores é muito acolhedora e solidária. Estou ansiosa para aplicar o que aprendi na Tech Academy em projetos futuros e na minha carreira profissional."
        </p>
      </div>
    </div>
    {/* Depoimento 4 */}
    <div className="depoimentos-card reverse">
      <img src={userMale} alt="imagem usuário" />
      <div>
        <strong>Rafael Lima, Profissional de TI</strong>
        <p>
          "Como profissional de TI, sempre estou em busca de atualização e aprimoramento contínuo. Os cursos da Tech Academy me permitiram aprofundar meus conhecimentos em áreas específicas, como segurança cibernética e cloud computing. Os instrutores são especialistas em seus campos e os materiais do curso são muito detalhados e práticos. Estou muito satisfeito com os resultados que obtive até agora e continuarei a me inscrever em novos cursos da Tech Academy."
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default CursoPage;