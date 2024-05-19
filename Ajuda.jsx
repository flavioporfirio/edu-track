import styles from "./Ajuda.module.css";

export default function Ajuda() {
  return (
    


    <div>  
      <h1>Ajuda</h1>    
      <h2>1. O usuário (professor) precisará acessar um link para poder utilizar o sistema.</h2>
      <br></br>
      <h2>2. Ao entrar na página inicial do sistema irá aparecer a página de login, onde o usuário poderá fazer o
    login com o RA e senha, caso já tenha acesso, ou poderá realizar o cadastro selecionando a opção
    “cadastrar professor”.</h2>
      <br></br>
      <h2>2.1. Para cadastrar professor o usuário precisará informar, o nome completo, e-mail acadêmico, RA,
    turma e matérias que está lecionando, senha, confirmar senha, adicionar uma foto de perfil (não
    obrigatório), selecionar para quem será feito o cadastro: Diretor, Coordenador ou Professor e clicar
    em cadastrar. Após o cadastro irá encaminhar o usuário para a tela de login onde o usuário irá realizar
    o login.</h2>
      <br></br>
      <h2>3. Após o login o usuário será direcionado para a tela de busca onde terá uma aba para o professor
    pesquisar o aluno que está procurando. Quando o professor digitar o nome do aluno, aparecerá os
    nomes e séries dos alunos que o professor está procurando.</h2>
      <br></br>
      <h2>4. Ao encontrar o aluno e selecioná-lo irá aparecer o nome do aluno e sua série e embaixo estará as
    opções “Registrar Faltas” e “Relatório de Faltas”.</h2>
      <br></br>
      <h2>4.1. Caso o usuário selecione a opção “Registrar Faltas” será direcionado a uma página onde
    aparecerá o nome do aluno e série. Logo embaixo terá a aba de “Selecione a matéria” onde o
    professor irá clicar e selecionar a matéria que o aluno faltou e ao lado terá “Digite a data” é a data que
    o aluno teve a falta. Em seguida clicar em registrar.</h2>
      <br></br>
      <h2>4.2. Na tela de “Relatório de Faltas” aparecerá o nome e série do aluno, e embaixo o relatório
    completo de faltas do aluno com a matéria e ao lado a quantidade de faltas, logo embaixo terá a
    quantidade total de faltas.</h2>



    <div className={styles.logo}>
          <img src="./logo-edu-track.jpeg" alt="logo edu track" />
        </div>

    
    </div>

    

    

    
  );

  
}
