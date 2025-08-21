// Dados das aulas e seletores de elementos (sem alterações aqui)
const aulasDisponiveis = {
    'Biomedicina': [
        '11/08 - Anatomia palpatória',
        '18/08 - Oficina de massinha - Tipos celulares',
        '18/08 - Genética Clínica: Síndromes Genéticas com Modelos Visuais',
        '18/08 - Peeling',
        '18/08 - PEIM',
        '23/08 - Oficina de massinha - Tipos celulares',
        '23/08 - Peeling',
        '25/08 - Morfofisiologia celular - células sanguíneas e elementos figurados',
        '06/09 - Genética Clínica: Síndromes Genéticas com Modelos Visuais',
        '06/09 - PEIM',
        '08/09 - Análise e Tecnologia de Alimentos',
        '13/09 - Morfofisiologia celular - células sanguíneas e elementos figurados',
        '15/09 - Preparação de esfregaço e coloração de GRAM',
        '22/09 - Plaqueamento de Bactérias',
        '22/09 - Capilar',
        '27/09 - Análise e Tecnologia de Alimentos',
        '29/09 - Contagem de Hemácias e Leucócitos',
        '04/10 - Preparação de esfregaço e coloração de GRAM',
        '06/10 - Mitose e Variedade Celular Humana',
        '06/10 - Fisiologia do Pâncreas Endócrino',
        '11/10 - Plaqueamento de Bactérias',
        '11/10 - Capilar',
        '13/10 - Preparo e Diluição de Soluções',
        '13/10 - Urinálise por fita Reagente',
        '18/10 - Contagem de Hemácias e Leucócitos',
        '20/10 - Imunoensaios',
        '25/10 - Mitose e Variedade Celular Humana',
        '25/10 - Fisiologia do Pâncreas Endócrino',
        '01/11 - Preparo e Diluição de Soluções',
        '01/11 - Urinálise por fita Reagente',
        '08/11 - Imunoensaios',
        '10/11 - Coleta, esfregaço e coloração',
        '10/11 - Método de Hoffman e Willis',
        '17/11 - Extração de DNA da Mucosa Oral',
        '29/11 - Coleta, esfregaço e coloração',
        '29/11 - Método de Hoffman e Willis',
        '06/12 - Extração de DNA da Mucosa Oral'
    ],
    'Farmácia': [
        '11/08 - Anatomia palpatória',
        '16/08 - Anatomia palpatória',
        '18/08 - Oficina de massinha - Tipos celulares',
        '18/08 - Genética Clínica: Síndromes Genéticas com Modelos Visuais',
        '23/08 - Oficina de massinha - Tipos celulares',
        '25/08 - Morfofisiologia celular - células sanguíneas e elementos figurados',
        '06/09 - Genética Clínica: Síndromes Genéticas com Modelos Visuais',
        '08/09 - Análise e Tecnologia de Alimentos',
        '13/09 - Morfofisiologia celular - células sanguíneas e elementos figurados',
        '15/09 - Preparação de esfregaço e coloração de GRAM',
        '22/09 - Plaqueamento de Bactérias',
        '27/09 - Análise e Tecnologia de Alimentos',
        '29/09 - Contagem de Hemácias e Leucócitos',
        '04/10 - Preparação de esfregaço e coloração de GRAM',
        '06/10 - Mitose e Variedade Celular Humana',
        '06/10 - Fisiologia do Pâncreas Endócrino',
        '11/10 - Plaqueamento de Bactérias',
        '13/10 - Preparo e Diluição de Soluções',
        '13/10 - Urinálise por fita Reagente',
        '18/10 - Contagem de Hemácias e Leucócitos',
        '20/10 - Imunoensaios',
        '25/10 - Mitose e Variedade Celular Humana',
        '25/10 - Fisiologia do Pâncreas Endócrino',
        '01/11 - Preparo e Diluição de Soluções',
        '01/11 - Urinálise por fita Reagente',
        '08/11 - Imunoensaios',
        '10/11 - Coleta, esfregaço e coloração',
        '10/11 - Método de Hoffman e Willis',
        '17/11 - Extração de DNA da Mucosa Oral',
        '29/11 - Coleta, esfregaço e coloração',
        '29/11 - Método de Hoffman e Willis',
        '06/12 - Extração de DNA da Mucosa Oral'
    ],
    'Educação-Física': [
        '23/08 - Esportes Coletivos: Voleibol',
        '27/09 - Manifestações Culturais, Rítmicas e Expressivas',
        '25/10 - Desenvolvimento e Aprendizagem Motora',
        '25/10 - Cinesiologia e Biomecânica',
        '29/11 - Treinamentos Resistido e Funcional',
        '13/12 - Tendências de Atividades de Academias e Clubes'
    ],
    'Estética': [
        '04/08 - Técnicas em Design de Sobrancelha',
        '11/08 - Técnicas em Design de Sobrancelha',
        '25/08 - Técnicas em Design de Sobrancelha',
        '01/09 - Técnica em Nutrição em Estética',
        '08/09 - Técnicas em Design de Sobrancelha',
        '15/09 - Técnicas de Maquiagem e Visagismo',
        '22/09 - Técnica em Nutrição em Estética',
        '29/09 - Recursos Manuais e Técnicas de Massagem',
        '06/10 - Técnicas de Maquiagem e Visagismo',
        '13/10 - Recursos Manuais e Técnicas de Massagem',
        '20/10 - Recursos Manuais e Técnicas de Massagem',
        '03/11 - Recursos Manuais e Técnicas de Massagem'
    ],
    'Físio-Terapia': [
        '25/08 - Anatomia Humana',
        '25/08 - Estudo Prático da Biomecânica e Cinesiologia dos Membros',
        '30/08 - Anatomia Humana',
        '30/08 - Estudo Prático da Biomecânica e Cinesiologia dos Membros',
        '01/09 - Primeiros Socorros (Procedimentos de emergência)',
        '20/09 - Primeiros Socorros (Procedimentos de emergência)',
        '14/10 - Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física',
        '01/11 - Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física',
        '17/11 - Avaliação e Diagnóstico Cinético-Funcional com Ênfase em Membros e Coluna',
        '22/11 - Biofeedback e Respostas Fisiológicas ao Estresse Ocupacional',
        '06/12 - Avaliação e Diagnóstico Cinético-Funcional com Ênfase em Membros e Coluna'
    ],
    'Nutrição': [
        '11/08 - Rotulagem de Alimentos',
        '16/08 - Rotulagem de Alimentos: Açúcar Adicionado',
        '25/08 - Rotulagem de Alimentos: Gordura Saturada',
        '25/08 - Rotulagem de Alimentos de Sódio',
        '30/08 - Rotulagem de Alimentos: Gordura Saturada',
        '13/09 - Rotulagem de Alimentos de Sódio',
        '22/09 - Avaliação Antropométrica',
        '29/09 - Avaliação Antropométrica Infantil',
        '11/10 - Avaliação Antropométrica',
        '18/10 - Avaliação Antropométrica Infantil'
    ],
    'Radiologia': [
        '20/09 -  Anatomia de Hipofracionamento Prostático',
        '18/10 - Anatomia Humana',
        '08/11 -  Delineamento e Anatomia de Região de Cabeça e Pescoço',
        '22/11 - Anatomia Radiológica',
        '13/12 - Imagens de Radiologia Digital',
        '06/12 -  Delineamento e Anatomia mamária'
    ],
    'Terapia-Ocupacional': [
        '25/08 - Anatomia Humana',
        '25/08 - Estudo Prático da Biomecânica e Cinesiologia dos Membros',
        '30/08 - Anatomia Humana',
        '30/08 - Estudo Prático da Biomecânica e Cinesiologia dos Membros',
        '08/09 - Coordenação Motora Fina e Grossa em Atividades Funcionais',
        '27/09 - Coordenação Motora Fina e Grossa em Atividades Funcionais',
        '03/11 - Biofeedback e Respostas Fisiológicas ao Estresse Ocupacional',
        '17/11 - Análise Funcional da Preensão e Manipulação',
        '24/11 - Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física',
        '06/12 - Análise Funcional da Preensão e Manipulação',
        '13/12 - Prática de Avaliação da Pressão Arterial Sistêmica em Repouso e Durante Atividade Física'
    ]
};
const cursoSelect = document.getElementById('curso');
const aulasContainer = document.getElementById('aulas-container');
const aulasSelect = document.getElementById('aula-pratica');
const form = document.getElementById('agendamento-form');
const submitButton = form.querySelector('button');

// Lógica para mostrar/esconder o menu (sem alterações aqui)
cursoSelect.addEventListener('change', function() {
    const cursoSelecionado = this.value;
    aulasSelect.innerHTML = '';
    if (cursoSelecionado) {
        aulasContainer.classList.remove('hidden');
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '-- Selecione a aula --';
        aulasSelect.appendChild(defaultOption);
        const aulas = aulasDisponiveis[cursoSelecionado];
        aulas.forEach(function(aula) {
            const novaOpcao = document.createElement('option');
            novaOpcao.textContent = aula;
            novaOpcao.value = aula;
            aulasSelect.appendChild(novaOpcao);
        });
    } else {
        aulasContainer.classList.add('hidden');
    }
});



// ===================================================================
// AQUI ESTÁ A NOVA LÓGICA DE ENVIO ("CABEÇALHO DA INTEGRAÇÃO")
// ===================================================================

// URL do seu script publicado. COLE O SEU URL AQUI!
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxU15iteEM-eso_KwErAtzEi96uRHTC5X0G-DVj69Nl5xJEkFF4QZPfeLYHGs0M_2qQlA/exec";

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    // --- MUDANÇA PRINCIPAL AQUI ---
    
    // 1. Mostra o feedback de sucesso IMEDIATAMENTE.
    alert('Agendamento recebido com sucesso! Estamos salvando seus dados.');
    
    // 2. Limpa o formulário e o esconde para o usuário.
    form.reset();
    aulasContainer.classList.add('hidden');
    
    // 3. Envia os dados para a planilha em segundo plano.
    // O usuário não precisa mais esperar por isso.
    fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            // Sucesso! Os dados foram salvos. Logamos no console.
            console.log('Dados salvos na planilha com sucesso na linha:', data.row);
        } else {
            // Falha. Logamos o erro para depuração.
            console.error('Erro ao salvar na planilha:', data.error);
            // Em um app mais complexo, poderíamos salvar os dados no navegador
            // e tentar enviar novamente mais tarde.
        }
    })
    .catch(error => {
        // Falha de rede.
        console.error('Erro de rede ao enviar o formulário:', error);
    });
});