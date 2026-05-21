export const metadata = {
  title: "Política de Privacidade — Clari",
  description: "Política de privacidade da Clari, tutora de IA para estudantes.",
};

export default function PrivacidadePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-slate-200">
      <h1 className="text-3xl font-bold mb-2">Política de Privacidade</h1>
      <p className="text-slate-400 mb-10">Última atualização: maio de 2026</p>

      <section className="space-y-8 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">1. Quem somos</h2>
          <p>
            Clari é uma plataforma de tutoria por inteligência artificial desenvolvida por Alexandre
            Martins de Albuquerque ("nós"). Nosso aplicativo é destinado a estudantes do ensino
            fundamental e médio com idades entre 13 e 18 anos.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">2. Dados que coletamos</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nome, e-mail e senha (para criação de conta)</li>
            <li>Série escolar, país e escola (perfil pedagógico)</li>
            <li>Mensagens de texto, áudios e imagens enviados durante as sessões de estudo</li>
            <li>Histórico de sessões, matérias estudadas e evolução pedagógica</li>
            <li>Dados de uso do aplicativo para fins de melhoria do serviço</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">3. Como usamos seus dados</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personalizar a experiência de aprendizado do aluno</li>
            <li>Gerar respostas da IA com base no contexto pedagógico</li>
            <li>Permitir que pais acompanhem o progresso dos filhos (com consentimento)</li>
            <li>Melhorar os algoritmos e a qualidade do serviço</li>
            <li>Cumprir obrigações legais</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">4. Compartilhamento de dados</h2>
          <p>
            Não vendemos seus dados. Compartilhamos apenas com fornecedores de infraestrutura
            necessários para o funcionamento do serviço (servidores, processamento de IA e
            autenticação), todos sujeitos a acordos de confidencialidade.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">5. Menores de 18 anos (LGPD)</h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), o tratamento de dados de menores de
            18 anos requer consentimento dos pais ou responsáveis legais. Ao criar uma conta para
            um menor, o responsável declara estar ciente e de acordo com esta política.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">6. Seus direitos</h2>
          <p>Você pode, a qualquer momento:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Acessar os dados que temos sobre você</li>
            <li>Corrigir informações incorretas</li>
            <li>Solicitar a exclusão completa da sua conta e dados</li>
            <li>Retirar o consentimento para uso dos seus dados</li>
          </ul>
          <p className="mt-2">
            Para exercer esses direitos, envie um e-mail para{" "}
            <a href="mailto:privacidade@clari.online" className="text-blue-400 underline">
              privacidade@clari.online
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">7. Retenção de dados</h2>
          <p>
            Mantemos seus dados enquanto sua conta estiver ativa. Após a exclusão da conta, os
            dados são removidos em até 30 dias, exceto quando a retenção for exigida por lei.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">8. Segurança</h2>
          <p>
            Utilizamos criptografia em trânsito (TLS) e em repouso. O acesso aos dados é
            controlado por autenticação e políticas de segurança em nível de linha (RLS).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">9. Contato</h2>
          <p>
            Dúvidas sobre esta política:{" "}
            <a href="mailto:privacidade@clari.online" className="text-blue-400 underline">
              privacidade@clari.online
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
