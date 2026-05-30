/**
 * Conteúdo de SEO em português (PT-BR), voltado aos brasileiros que moram
 * na região (Santa Rita e Mallorquín têm grande comunidade brasiguaia).
 *
 * Renderizado com `sr-only`: não aparece visualmente, mas continua no DOM,
 * acessível a leitores de tela e indexável pelos buscadores. Evita-se
 * `display:none` de propósito, pois o Google penaliza texto oculto assim.
 */
export function SeoPT() {
  return (
    <section lang="pt-BR" className="sr-only" aria-label="Informações sobre internet no Paraguai">
      <h2>Internet no Paraguai com a Zux — fibra óptica no Alto Paraná</h2>
      <p>
        A Zux é provedora de internet por fibra óptica no Paraguai, com a melhor internet
        do Alto Paraná. Atendemos Santa Rita, Juan León Mallorquín e região, levando
        internet de fibra óptica com velocidade simétrica real — a velocidade de subida é
        igual à de bajada — estabilidade total e suporte de verdade.
      </p>
      <p>
        Para os brasileiros que moram no Paraguai (brasiguaios) em Santa Rita e Mallorquín,
        a Zux oferece a melhor internet fibra óptica do Paraguai, com planos a partir de
        130.000 Gs, sem limite de dados e com atendimento que fala português e espanhol.
        Internet estável para trabalhar, estudar, jogar e fazer streaming.
      </p>
      <p>
        Nossa cobertura de internet no Alto Paraná está em expansão: já estamos em Santa Rita
        e Juan León Mallorquín, e chegamos em breve a O'Leary e Campo 9. Se você procura o
        melhor provedor de internet fibra óptica no Paraguai, internet em Alto Paraná, internet
        em Santa Rita ou internet em Mallorquín, fale com a Zux.
      </p>
    </section>
  );
}
