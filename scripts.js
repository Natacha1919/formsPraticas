// 1. ESTRUTURA DE DADOS COMPLETA
const dadosCursos = {
    // --- CURSOS COM A NOVA LÓGICA DE SEMESTRE ---
    'Biomedicina': {
        '1º Semestre': [{ aula: 'Extração de DNA da mucosa oral', data: '06/12/25' }],
        '2º Semestre': [
            { aula: 'Genética Clínica: Síndromes Genéticas com Modelos Visuais', data: '06/09/25' },
            { aula: 'Mitose e Variedade Celular', data: '25/10/25' },
            { aula: 'Preparo e diluição de soluções', data: '01/11/25' }
        ],
        '3º Semestre': [
            { aula: 'Anatomia palpatória', data: '16/08/25' },
            { aula: 'Fisiologia do Pâncreas endócrino', data: '25/10/25' },
            { aula: 'Urinálise por fita reagente e visualização de elementos figurados', data: '01/11/25' }
        ],
        '4º Semestre': [
            { aula: 'Oficina de massinha - Tipos celulares', data: '23/08/25' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '13/09/25' },
            { aula: 'Método de Hoffman e método de Willis', data: '29/11/25' },
            { aula: 'Coleta, Preparação de esfregaço e coloração de lâminas', data: '29/11/25' },
            { aula: 'Preparação de esfregaço e coloração e Coloração de Gram', data: '04/10/25' }
        ],
        '5º Semestre': [
            { aula: 'Plaqueamento de Bacterias', data: '11/10/25' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '13/09/25' },
            { aula: 'Coleta, esfregaço e coloração de lâminas', data: '29/11/25' },
            { aula: 'Imunoensaios', data: '08/11/25' }
        ],
        '6º Semestre': [
            { aula: 'Análise e tecnologia de alimentos', data: '27/09/25' },
            { aula: 'Contagem de hemácias e leucócitos na câmera de Newbauer', data: '18/10/25' }
        ],
        '7º Semestre': [
            { aula: 'Peeling', data: '23/08/25' },
            { aula: 'Análise e tecnologia de Alimentos', data: '27/09/25' }
        ],
        '8º Semestre': [
            { aula: 'PEIM', data: '06/09/25' },
            { aula: 'Capilar', data: '11/10/25' }
        ]
    },
    'Farmácia': {
        '1º Semestre': [{ aula: 'Extração de DNA da mucosa oral', data: '06/12/25' }],
        '2º Semestre': [
            { aula: 'Genética Clínica: Síndromes Genéticas com Modelos Visuais', data: '06/09/25' },
            { aula: 'Mitose e Variedade Celular', data: '25/10/25' },
            { aula: 'Preparo e diluição de soluções', data: '01/11/25' }
        ],
        '3º Semestre': [
            { aula: 'Anatomia palpatória', data: '16/08/25' },
            { aula: 'Fisiologia do Pâncreas endócrino', data: '25/10/25' },
            { aula: 'Método de Hoffman e método de Willis', data: '29/11/25' }
        ],
        '4º Semestre': [
            { aula: 'Oficina de massinha - Tipos celulares', data: '23/08/25' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '13/09/25' },
            { aula: 'Urinálise por fita reagente e visualização de elementos figurados', data: '01/11/25' },
            { aula: 'Coleta, Preparação de esfregaço e coloração de lâminas', data: '29/11/25' },
            { aula: 'Preparação de esfregaço e coloração e Coloração de Gram', data: '04/10/25' }
        ],
        '5º Semestre': [
            { aula: 'Plaqueamento de Bacterias', data: '11/10/25' },
            { aula: 'Morfofisiologia celular - células sanguíneas e elementos figurados', data: '13/09/25' },
            { aula: 'Coleta, esfregaço e coloração de lâminas', data: '29/11/25' },
            { aula: 'Imunoensaios', data: '08/11/25' }
        ],
        '6º Semestre': [
            { aula: 'Análise e tecnologia de alimentos', data: '27/09/25' },
            { aula: 'Contagem de hemácias e leucócitos na câmera de Newbauer', data: '18/10/25' }
        ],
        '7º Semestre': [{ aula: 'Coleta, esfregaço e coloração de lâminas', data: '29/11/25' }],
        '8º Semestre': [{ aula: 'Contagem de hemácias e leucócitos na câmera de Newbauer', data: '18/10/25' }]
    },
    'Fisioterapia': {
        '2º Semestre': [
            { aula: 'Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física', data: '01/11/25' },
            { aula: 'Anatomia Humana', data: '30/08/25' }
        ],
        '3º Semestre': [{ aula: 'Estudo Prático da Biomecânica e Cinesiologia dos Membros', data: '30/08/25' }],
        '4º Semestre': [
            { aula: 'Primeiros socorros (Procedimentos de emergência)', data: '20/09/25' },
            { aula: 'Avaliação e Diagnóstico Cinético-Funcional com Ênfase em Membros e Coluna', data: '06/12/25' }
        ]
    },
    'Nutrição': {
        '2º Semestre': [{ aula: 'Rotulagem de Alimentos - Açúcar Adicionado', data: '16/08/25' }],
        '3º Semestre': [{ aula: 'Rotulagem de Alimentos - Gordura saturada', data: '30/08/25' }],
        '4º Semestre': [{ aula: 'Rotulagem de Alimentos - Sódio', data: '13/09/25' }],
        '5º Semestre': [{ aula: 'Avaliação Antropométrica', data: '11/10/25' }],
        '6º Semestre': [{ aula: 'Avaliação Antropométrica em crianças', data: '18/10/25' }]
    },

    // --- CURSOS COM A LÓGICA ANTIGA (SEM SEMESTRE) ---
    'Educação-Física': [
        { aula: 'Esportes Coletivos: Voleibol', data: '23/08/25' },
        { aula: 'Manifestações Culturais, Rítmicas e Expressivas', data: '27/09/25' },
        { aula: 'Desenvolvimento e Aprendizagem Motora', data: '25/10/25' },
        { aula: 'Cinesiologia e Biomecânica', data: '25/10/25' },
        { aula: 'Treinamentos Resistido e Funcional', data: '29/11/25' },
        { aula: 'Tendências de Atividades de Academias e Clubes', data: '13/12/25' }
    ],
    'Estética': [
        { aula: 'Técnicas em Design de Sobrancelha', data: '04/08/25' },
        { aula: 'Técnicas em Design de Sobrancelha', data: '11/08/25' },
        { aula: 'Técnicas em Design de Sobrancelha', data: '25/08/25' },
        { aula: 'Técnica em Nutrição em Estética', data: '01/09/25' },
        { aula: 'Técnicas em Design de Sobrancelha', data: '08/09/25' },
        { aula: 'Técnicas de Maquiagem e Visagismo', data: '15/09/25' },
        { aula: 'Técnica em Nutrição em Estética', data: '22/09/25' },
        { aula: 'Recursos Manuais e Técnicas de Massagem', data: '29/09/25' },
        { aula: 'Técnicas de Maquiagem e Visagismo', data: '06/10/25' },
        { aula: 'Recursos Manuais e Técnicas de Massagem', data: '13/10/25' },
        { aula: 'Recursos Manuais e Técnicas de Massagem', data: '20/10/25' },
        { aula: 'Recursos Manuais e Técnicas de Massagem', data: '03/11/25' }
    ],
    'Radiologia': [
        { aula: 'Anatomia de Hipofracionamento Prostático', data: '20/09/25' },
        { aula: 'Anatomia Humana', data: '18/10/25' },
        { aula: 'Delineamento e Anatomia de Região de Cabeça e Pescoço', data: '08/11/25' },
        { aula: 'Anatomia Radiológica', data: '22/11/25' },
        { aula: 'Imagens de Radiologia Digita', data: '13/12/25' },
        { aula: 'Delineamento e Anatomia mamária', data: '06/12/25' },
    ],
    'Terapia-Ocupacional': [
        { aula: 'Anatomia Humana', data: '30/08/25' },
        { aula: 'Estudo Prático da Biomecânica e Cinesiologia dos Membros', data: '30/08/25' },
        { aula: 'Coordenação Motora Fina e Grossa em Atividades Funcionais', data: '27/09/25' },
        { aula: 'Biofeedback e Respostas Fisiológicas ao Estresse Ocupacional', data: '22/11/25' },
        { aula: 'Análise Funcional da Preensão e Manipulação', data: '06/12/25' },
        { aula: 'Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física', data: '13/12/25' }
    ]
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
