import Accordion from "react-bootstrap/Accordion";
import "../styles/faqPage.css";

function FAQAccordion() {
  return (
    <div id="perguntas-frequentes">
      <div className="container">
        <h2>Dúvidas Frequentes</h2>
      </div>
      <div className="container">
        <Accordion flush id="accordion-duvidas">
          {/* Pergunta 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>
                Quais são os pré-requisitos para se inscrever nos cursos da Tech
                Academy?
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              Não há pré-requisitos formais para se inscrever em nossos cursos.
              Eles são projetados para atender tanto a iniciantes quanto a
              profissionais experientes em tecnologia. No entanto, é útil ter
              conhecimentos básicos de informática e navegação na web.
            </Accordion.Body>
          </Accordion.Item>
          {/* Pergunta 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <strong>
                Como faço para acessar os cursos depois de me inscrever?
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              Após a inscrição, você receberá acesso instantâneo ao nosso portal
              de aprendizado online. Basta fazer login com suas credenciais e
              você terá acesso aos materiais do curso, incluindo vídeos,
              leituras, exercícios práticos e fóruns de discussão.
            </Accordion.Body>
          </Accordion.Item>
          {/* Pergunta 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <strong>
                Os cursos da Tech Academy são ministrados ao vivo ou gravados?
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              Nossos cursos são gravados e disponibilizados online para que você
              possa estudar no seu próprio ritmo e no horário que for mais
              conveniente para você. Isso oferece flexibilidade para equilibrar
              seus estudos com outros compromissos pessoais e profissionais.
            </Accordion.Body>
          </Accordion.Item>
          {/* Pergunta 4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <strong>
                Os cursos da Tech Academy oferecem certificados de conclusão?
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              Sim, ao concluir com sucesso um curso da Tech Academy, você
              receberá um certificado de conclusão que pode ser adicionado ao
              seu currículo e perfil profissional. Nossos certificados são
              reconhecidos pela indústria e refletem suas conquistas em
              tecnologia.
            </Accordion.Body>
          </Accordion.Item>
          {/* Pergunta 5 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <strong>
                Os cursos da Tech Academy incluem suporte ou tutoria?
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              Sim, oferecemos suporte técnico e acadêmico para os alunos durante
              todo o curso. Nossos instrutores e equipe de suporte estão
              disponíveis para responder a perguntas, fornecer orientação e
              ajudá-lo a superar quaisquer obstáculos que possam surgir durante
              seus estudos.
            </Accordion.Body>
          </Accordion.Item>
          {/* Pergunta 6 */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <strong>
                Posso acessar os cursos da Tech Academy em dispositivos móveis?
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              Sim, nossa plataforma de aprendizado é totalmente responsiva e
              pode ser acessada em dispositivos móveis, como smartphones e
              tablets. Isso permite que você estude em qualquer lugar e a
              qualquer momento, desde que tenha uma conexão com a internet.
            </Accordion.Body>
          </Accordion.Item>
          {/* Pergunta 7 */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <strong>
                Como faço para me inscrever em um curso da Tech Academy?
              </strong>
            </Accordion.Header>
            <Accordion.Body>
              Para se inscrever em um curso, basta visitar nossa página de
              cursos, selecionar o curso de seu interesse e seguir as instruções
              para se inscrever e efetuar o pagamento. Uma vez inscrito, você
              receberá acesso imediato ao conteúdo do curso.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQAccordion;
