// 1. ESTRUTURA DE DADOS COMPLETA (ATUALIZADA)
const dadosCursos = {
    'Biomedicina': {
        '1º Semestre': [{ aula: 'Extração de DNA da mucosa oral', data: '18/04/26 - 09h00 às 12h00' }],
        '2º Semestre': [
            { aula: 'Genética Clínica: Síndromes Genéticas com Modelos Visuais', data: '14/03/26 - 09h00 às 12h00' },
            { aula: 'Mitose e Variedade Celular', data: '16/05/26 - 09h00 às 12h00' },
            { aula: 'Preparo e diluição de soluções', data: '27/06/26 - 09h00 às 12h00' }
        ],
        '3º Semestre': [
            { aula: 'Anatomia palpatória', data: '21/03/26 - 09h00 às 12h00' },
            { aula: 'Fisiologia do Pâncreas endócrino', data: '23/05/26 - 13h00 às 16h00' },
            { aula: 'Urinálise por fita reagente e visualização de elementos figurados', data: '04/07/26 - 13h00 às 16h00' }
        ],
        '4º Semestre': [
            { aula: 'Oficina de massinha - Tipos celulares', data: '28/03/26 - 09h00 às 12h00' },
            { aula: 'Método de Hoffman e método de Willis', data: '30/05/26 - 13h00 às 16h00' },
            { aula: 'Coleta, Preparação de esfregaço e coloração de lâminas', data: '20/06/26 - 09h00 às 12h00' },
            { aula: 'Preparação de esfregaço e coloração e Coloração de Gram', data: '11/07/26 - 13h00 às 16h00' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '11/04/26 - 09h00 às 12h00' }
        ],
        '5º Semestre': [
            { aula: 'Plaqueamento de Bactérias', data: '28/03/26 - 13h00 às 16h00' },
            { aula: 'Coleta, esfregaço e coloração de lâminas', data: '16/05/26 - 13h00 às 16h00' },
            { aula: 'Imunoensaios', data: '06/06/26 - 09h00 às 12h00' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '11/04/26 - 09h00 às 12h00' }
        ],
        '6º Semestre': [
            { aula: 'Contagem de hemácias e leucócitos na câmera de Newbauer', data: '13/06/26 - 09h00 às 12h00' },
            { aula: 'Análise e tecnologia de Alimentos', data: '25/04/26 - 09h00 às 12h00' }
        ],
        '7º Semestre': [
            { aula: 'Peeling', data: '13/06/26 - 09h00 às 12h00' },
            { aula: 'Análise e tecnologia de Alimentos', data: '11/07/26 - 09h00 às 12h00' }
        ],
        '8º Semestre': [
            { aula: 'PEIM', data: '09/05/26 - 09h00 as 12h00' },
            { aula: 'Capilar', data: '04/07/26 - 09h00 as 12h00' }
        ]
    },
    'Farmácia': {
        '1º Semestre': [{ aula: 'Extração de DNA da mucosa oral', data: '18/04/26 - 09h00 às 12h00' }],
        '2º Semestre': [
            { aula: 'Genética Clínica: Síndromes Genéticas com Modelos Visuais', data: '14/03/26 - 09h00 às 12h00' },
            { aula: 'Mitose e Variedade Celular', data: '16/05/26 - 09h00 às 12h00' },
            { aula: 'Preparo e diluição de soluções', data: '27/06/26 - 09h00 às 12h00' }
        ],
        '3º Semestre': [
            { aula: 'Anatomia palpatória', data: '21/03/26 - 09h00 às 12h00' },
            { aula: 'Fisiologia do Pâncreas endócrino', data: '23/05/26 - 13h00 às 16h00' },
            { aula: 'Método de Hoffman e método de Willis', data: '30/05/26 - 13h00 às 16h00' }
        ],
        '4º Semestre': [
            { aula: 'Oficina de massinha - Tipos celulares', data: '28/03/26 - 09h00 às 12h00' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '11/04/26 - 09h00 às 12h00' },
            { aula: 'Urinálise por fita reagente e visualização de elementos figurados', data: '04/07/26 - 13h00 às 16h00' },
            { aula: 'Preparação de esfregaço e coloração e Coloração de Gram', data: '11/07/26 - 13h00 às 16h00' }
        ],
        '5º Semestre': [
            { aula: 'Plaqueamento de Bacterias', data: '28/03/26 - 13h00 às 16h00' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '11/04/26 - 09h00 às 12h00' },
            { aula: 'Coleta, esfregaço e coloração de lâminas', data: '16/05/26 - 13h00 às 16h00' },
            { aula: 'Imunoensaios', data: '06/06/26 - 09h00 às 12h00' }
        ],
        '6º Semestre': [
            { aula: 'Análise e tecnologia de alimentos', data: '25/04/26 - 09h00 às 12h00' },
            { aula: 'Contagem de hemácias e leucócitos na câmera de Newbauer', data: '13/06/26 - 09h00 às 12h00' }
        ],
        '7º Semestre': [{ aula: 'Coleta, Preparação de esfregaço e Coloração de lâminas', data: '20/06/26 - 09h00 às 12h00' }],
        '8º Semestre': [{ aula: 'Contagem de hemácias e leucócitos na câmera de Newbauer', data: '13/06/26 - 09h00 às 12h00' }]
    },
    'Fisioterapia': {
        '1º Semestre': [
            { aula: 'Oficina de massinha - Tipos celulares', data: '28/03/26 - 09h00 às 12h00' },
            { aula: 'Oficina Anatomia palpatória', data: '21/03/26 - 09h00 às 12h00' }
        ],
        '2º Semestre': [
            { aula: 'Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física', data: '11/04/26 - 09h00 às 12h00' },
            { aula: 'Anatomia Humana Básica', data: '23/05/26 - 09h00 às 12h00' }
        ],
        '3º Semestre': [
            { aula: 'Biomecânica e Neurofisiologia da Lesão à Recuperação', data: '16/05/26 - 09h00 às 12h00' },
            { aula: 'Estudo Prático da Biomecânica e Cinesiologia dos Membros', data: '14/03/26 - 09h00 às 12h00' }
        ],
        '4º Semestre': [
            { aula: 'Primeiros socorros (Procedimentos de emergência)', data: '14/03/26 - 09h00 às 12h00' },
            { aula: 'Avaliação e Diagnóstico Cinético-Funcional com Ênfase em Membros e Coluna', data: '09/05/26 - 09h00 às 12h00' }
        ],
        '5º Semestre': [
            { aula: 'Recursos terapêuticos manuais', data: '25/04/26 - 09h00 às 12h00' },
            { aula: 'Aplicação de Recursos de Eletrotermofototerapia na Reabilitação Fisioterapêutica', data: '13/06/26 - 09h00 às 12h00' }
        ]
    },
    'Terapia-Ocupacional': {
        '1º Semestre': [
            { aula: 'Oficina de massinha - Tipos celulares', data: '28/03/26 - 09h00 às 12h00' },
            { aula: 'Oficina Anatomia palpatória', data: '21/03/26 - 09h00 às 12h00' }
        ],
        '2º Semestre': [
            { aula: 'Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física', data: '11/04/26 - 09h00 às 12h00' },
            { aula: 'Anatomia Humana Básica', data: '23/05/26 - 09h00 às 12h00' }
        ],
        '3º Semestre': [
            { aula: 'Biofeedback e Respostas Fisiológicas ao Estresse Ocupacional', data: '14/03/26 - 09h00 às 12h00' },
            { aula: 'Estudo Prático da Biomecânica e Cinesiologia dos Membros', data: '16/05/26 - 09h00 às 12h00' }
        ],
        '4º Semestre': [
            { aula: 'Coordenação Motora Fina e Grossa em Atividades Funcionais', data: '07/03/26 - 09h00 às 12h00' },
            { aula: 'Análise Funcional da Preensão e Manipulação', data: '09/05/26 - 09h00 às 12h00' }
        ],
        '5º Semestre': [
            { aula: 'Oficinas Terapêuticas com Recursos de Baixo Custo', data: '25/04/26 - 09h00 às 12h00' },
            { aula: 'Estimulação Sensorial Multimodal em Diferentes Perfis Funcionais', data: '13/06/26 - 09h00 às 12h00' }
        ],
        '6º Semestre': [
            { aula: 'Adaptação de Atividades para Alunos com Deficiência', data: '16/05/26 - 13h00 às 16h00' },
            { aula: 'Confecção de Órteses Simples de Mão e Punho', data: '20/06/26 - 09h00 às 12h00' }
        ]
    },
    'Estética-Cosmética': {
        '1º Semestre': [
            { aula: 'Técnicas em Design de Sobrancelhas (Aula 1)', data: '02/03/26 - 19h00 às 22h00' },
            { aula: 'Técnicas em Design de Sobrancelhas (Aula 2)', data: '27/04/26 - 19h00 às 22h00' },
            { aula: 'Nutrição em estética', data: '08/06/26 - 19h00 às 22h00' }
        ],
        '2º Semestre': [
            { aula: 'Técnicas de Maquiagem e Visagismo e embelezamento', data: '09/03/26 - 19h00 às 22h00' },
            { aula: 'Recursos Manuais e Técnicas de Massagem (Aula 1)', data: '04/05/26 - 19h00 às 22h00' },
            { aula: 'Recursos Manuais e Técnicas de Massagem (Aula 2)', data: '15/06/26 - 19h00 às 22h00' }
        ],
        '3º Semestre': [
            { aula: 'Procedimentos em Estética Corporal (Aula 1)', data: '23/03/26 - 19h00 às 22h00' },
            { aula: 'Procedimentos em Estética Facial (Aula 1)', data: '11/05/26 - 19h00 às 22h00' },
            { aula: 'Procedimentos em Estética Corporal (Aula 2)', data: '13/04/26 - 19h00 às 22h00' },
            { aula: 'Procedimentos em Estética Facial (Aula 2)', data: '18/05/26 - 19h00 às 22h00' }
        ],
        '4º Semestre': [
            { aula: 'Spaterapia e Práticas Alternativas em Estética', data: '06/04/26 - 19h00 às 22h00' },
            { aula: 'Estética Capilar e Tricologia', data: '22/06/26 - 19h00 às 22h00' }
        ],
        '5º Semestre': [
            { aula: 'Eletroterapia, Termoterapia e Fototerapia (Aula 1)', data: '16/03/26 - 19h00 às 22h00' },
            { aula: 'PEIM', data: '06/04/26 - 19h00 às 22h00' },
            { aula: 'Eletroterapia, Termoterapia e Fototerapia (Aula 2)', data: '01/06/26 - 19h00 às 22h00' },
            { aula: 'Eletroterapia, Termoterapia e Fototerapia (Aula 3)', data: '29/06/26 - 19h00 às 22h00' }
        ]
    },
    'Nutrição': {
        '1º Semestre': [
            { aula: 'Interpretação Prática do Guia Alimentar e Classificação NOVA', data: '18/04/26 - 09h00 às 12h00' },
            { aula: 'Prática de Psicologia do Comportamento Alimentar', data: '13/06/26 - 09h00 às 12h00' }
        ],
        '2º Semestre': [
            { aula: 'Rotulagem de Alimentos - Açúcar Adicionado, gordura saturada e sódio', data: '14/03/26 - 09h00 às 12h00' },
            { aula: 'Anatomia palpatória', data: '16/05/26 - 09h00 às 12h00' }
        ],
        '3º Semestre': [
            { aula: 'Elaboração de Procedimentos Operacionais Padronizados (POPs) em UAN', data: '21/03/26 - 09h00 às 12h00' },
            { aula: 'Elaboração de Material Educativo em EAN', data: '23/05/26 - 09h00 às 12h00' }
        ],
        '4º Semestre': [
            { aula: 'Avaliação Antropométrica Adulto', data: '28/03/26 - 09h00 às 12h00' },
            { aula: 'Avaliação Antropométrica Infantil', data: '04/07/26 - 09h00 às 12h00' }
        ],
        '5º Semestre': [
            { aula: 'Uso de Softwares Gratuitos de Planejamento Alimentar em Nutrição', data: '09/05/26 - 09h00 às 12h00' },
            { aula: 'Confecção de Cardápio Semanal em UAN', data: '20/06/26 - 09h00 às 12h00' }
        ],
        '6º Semestre': [
            { aula: 'Elaboração do Minimanual de Boas Práticas em Unidade de Alimentação e Nutrição (UAN)', data: '27/06/26 - 09h00 às 12h00' },
            { aula: 'Avaliação Nutricional de Gestante', data: '25/04/26 - 09h00 às 12h00' }
        ],
        '7º Semestre': [
            { aula: 'Prescrição e Cálculo de Dieta Enteral', data: '11/04/26 - 09h00 às 12h00' },
            { aula: 'Triagem Nutricional na Prática Clínica', data: '16/05/26 - 13h00 as 16h00' }
        ],
        '8º Semestre': [
            { aula: 'Elaboração de Fichas Técnicas de Preparações', data: '18/04/26 - 13h00 as 16h00' },
            { aula: 'Avaliação do Consumo Alimentar', data: '13/06/26 - 13h00 as 16h00' }
        ]
    },
    'Radiologia': {
        '1º Semestre': [
            { aula: 'Atendimento, Comunicação e Acolhimento do Paciente em Exames Radiográficos', data: '18/04/26 - 09h00 às 12h00' },
            { aula: 'Controle de Qualidade da Imagem Radiográfica na Prática Clínica', data: '14/03/26 - 09h00 às 12h00' }
        ],
        '2º Semestre': [
            { aula: 'Controle de Qualidade da Imagem Radiográfica na Prática Clínica', data: '14/03/26 - 09h00 às 12h00' },
            { aula: 'Educação em Saúde das Mamas: Autoexame, Rastreamento e Atuação do Tecnólogo em Radiologia', data: '16/05/26 - 09h00 às 12h00' }
        ],
        '3º Semestre': [
            { aula: 'Acessórios Radiológicos: Reconhecimento, Uso Correto e Impacto na Qualidade da Imagem', data: '28/03/26 - 09h00 às 12h00' },
            { aula: 'Comunicação em Situações Sensíveis na Radiologia: Limites Éticos do Tecnólogo', data: '09/05/26 - 09h00 às 12h00' }
        ],
        '4º Semestre': [
            { aula: 'LGPD na Radiologia: Proteção e Uso Ético dos Dados do Paciente', data: '25/04/26 - 09h00 às 12h00' },
            { aula: 'Comunicação em Situações Sensíveis na Radiologia: Limites Éticos do Tecnólogo', data: '09/05/26 - 09h00 às 12h00' }
        ],
        '5º Semestre': [
            { aula: 'Segurança do Paciente na Radiologia: Prevenção de Erros na Prática de Exames de Imagem', data: '11/04/26 - 09h00 às 12h00' },
            { aula: 'Anatomia Radiológica Aplicada à Tomografia Computadorizada', data: '13/06/26 - 09h00 às 12h00' }
        ],
        '6º Semestre': [
            { aula: 'Inteligência Artificial na Radiologia', data: '23/05/26 - 13h00 as 16h00' },
            { aula: 'Anatomia Radiológica Aplicada à Tomografia Computadorizada', data: '13/06/26 - 09h00 às 12h00' }
        ]
    },
    'Educação-Física': {
        '1º Semestre': [{ aula: 'Esportes Coletivos: Iniciação Esportiva e Atletismo', data: '28/02/25 - 09h00 às 12h00' }],
        '2º Semestre': [{ aula: 'Desenvolvimento e Aprendizagem Motora', data: '30/05/25 - 09h00 às 12h00' }],
        '3º Semestre': [{ aula: 'Ginástica Geral e Artística', data: '27/06/25 - 09h00 às 12h00' }],
        '4º Semestre': [{ aula: 'Cinesiologia e Biomecânica', data: '30/05/25 - 09h00 às 12h00' }],
        '5º Semestre': [{ aula: 'Esportes Coletivos: Futebol e Futsal', data: '25/04/25 - 09h00 às 12h00' }]
    }
};

// 2. SELETORES DE ELEMENTOS
const cursoSelect = document.getElementById('curso');
const semestreContainer = document.getElementById('semestre-container');
const semestreSelect = document.getElementById('semestre');
const aulasContainer = document.getElementById('aulas-container');
const aulasSelect = document.getElementById('aula-pratica');
const form = document.getElementById('agendamento-form');

// Função para resetar e esconder campos
function resetFields(...fields) {
    fields.forEach(field => {
        field.container.classList.add('hidden');
        field.select.innerHTML = '';
    });
}

// 3. LÓGICA DE EVENTOS CORRIGIDA
cursoSelect.addEventListener('change', function() {
    const cursoSelecionado = this.value;
    resetFields({ container: semestreContainer, select: semestreSelect }, { container: aulasContainer, select: aulasSelect });

    // --- CORREÇÃO APLICADA ---
    // Garante que o campo de semestre NUNCA seja obrigatório por padrão
    semestreSelect.required = false;

    if (!cursoSelecionado) return;

    const dadosDoCurso = dadosCursos[cursoSelecionado];

    // Se o curso tem semestres (é um objeto, não um array)
    if (dadosDoCurso && !Array.isArray(dadosDoCurso)) {
        semestreContainer.classList.remove('hidden');
        semestreSelect.innerHTML = '<option value="">-- Selecione o semestre --</option>';
        
        // TORNA O CAMPO OBRIGATÓRIO APENAS QUANDO VISÍVEL
        semestreSelect.required = true;
        
        Object.keys(dadosDoCurso).forEach(semestre => {
            const option = document.createElement('option');
            option.value = semestre;
            option.textContent = semestre;
            semestreSelect.appendChild(option);
        });
    } 
    // Se o curso NÃO tem semestres (é um array)
    else if (dadosDoCurso && Array.isArray(dadosDoCurso)) {
        // O campo semestre permanece escondido e não-obrigatório
        aulasContainer.classList.remove('hidden');
        aulasSelect.innerHTML = '<option value="">-- Selecione a aula --</option>';
        dadosDoCurso.forEach(item => {
            const option = document.createElement('option');
            const textoOpcao = `${item.data} - ${item.aula}`;
            option.value = textoOpcao;
            option.textContent = textoOpcao;
            aulasSelect.appendChild(option);
        });
    }
});

semestreSelect.addEventListener('change', function() {
    const cursoSelecionado = cursoSelect.value;
    const semestreSelecionado = this.value;

    resetFields({ container: aulasContainer, select: aulasSelect });

    if (!semestreSelecionado) return;

    const aulas = dadosCursos[cursoSelecionado][semestreSelecionado];
    aulasContainer.classList.remove('hidden');
    aulasSelect.innerHTML = '<option value="">-- Selecione a aula --</option>';

    aulas.forEach(item => {
        const option = document.createElement('option');
        const textoOpcao = `${item.data} - ${item.aula}`;
        option.value = textoOpcao;
        option.textContent = textoOpcao;
        aulasSelect.appendChild(option);
    });
});

// 4. LÓGICA DE ENVIO
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxU15iteEM-eso_KwErAtzEi96uRHTC5X0G-DVj69Nl5xJEkFF4QZPfeLYHGs0M_2qQlA/exec"; // <-- NÃO ESQUEÇA DE COLOCAR SEU URL!

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    
    alert('Agendamento recebido com sucesso! Estamos salvando seus dados.');
    
    form.reset();
    resetFields({ container: semestreContainer, select: semestreSelect }, { container: aulasContainer, select: aulasSelect });
    
    fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            console.log('Dados salvos na planilha com sucesso na linha:', data.row);
        } else {
            console.error('Erro ao salvar na planilha:', data.error);
        }
    })
    .catch(error => {
        console.error('Erro de rede ao enviar o formulário:', error);
    });
});