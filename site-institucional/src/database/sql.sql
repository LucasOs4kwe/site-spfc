create database spfc;
use spfc;

-- TABELA USUÁRIO
create table usuario(
id_usuario INT AUTO_INCREMENT,
nome_usuario VARCHAR(50), 
email_usuario VARCHAR(60),
senha_usuario VARCHAR(25),
dataNascimento_usuario DATE,
fk_jogadorFav INT,
fk_torcidaOrg INT,
PRIMARY KEY (id_usuario),
FOREIGN KEY (fk_jogadorFav) REFERENCES jogador(id_jogadorFav),
FOREIGN KEY (fk_torcidaOrg) REFERENCES torcida_organizada(id_torcidaOrg)
);

-- TABELA JOGADOR
create table jogador(
id_jogadorFav INT AUTO_INCREMENT,
nome_jogador VARCHAR(50),
posicao_jogador VARCHAR(50),
PRIMARY KEY (id_jogadorFav)
);

-- TABELA T. ORGANIZADA
create table torcida_organizada(
id_torcidaOrg INT AUTO_INCREMENT,
nome_torcida VARCHAR(50),
PRIMARY KEY (id_torcidaOrg)
);

select * from usuario;
select * from jogador;
select * from torcida_organizada;

-- INSERTS 
-- JOGADORES 
insert into jogador (nome_jogador, posicao_jogador) values 
("Luciano", "Atacante"),
("Jonathan Calleri", "Atacante"),
("Éder", "Atacante"),
("Pablo", "Atacante"),
("Galeano", "Atacante"),
("Emiliano Rigoni", "Atacante"),
("Martín Benítez", "Meia Atacante"),
("Igor Gomes", "Meia Atacante"),
("Luan", "Volante"),
("Gabriel Sara", "Meia Atacante"),
("Gabriel Neves", "Volante"),
("Liziero", "Volante"),
("Rodrigo Nestor", "Volante"),
("Vitor Bueno", "Meia Atacante"),
("Shaylon", "Meia Atacante"),
("Talles Costa", "Volante"),
("Wellington", "Lateral Esquerdo"),
("William", "Volante"),
("Miranda", "Zagueiro"),
("Robert Arboleda", "Zagueiro"),
("Reinaldo", "Lateral Esquerdo"),
("Luis Orejuela", "Lateral Direito"),
("Bruno Alves", "Zagueiro"),
("Diego Costa", "Zagueiro"),
("Igor Vinícius", "Lateral Direito"),
("Léo", "Lateral Esquerdo"),
("Walce", "Zagueiro"),
("Rodrigo Freitas", "Zagueiro"),
("Tiago Volpi", "Goleiro"),
("Lucas Perri", "Goleiro"),
("Thiago Couto", "Goleiro");

-- TORCIDA ORGANIZADA
insert into torcida_organizada (nome_torcida) values
("Torcida Independente"),
("Dragões da Real"),
("Falange Tricolor"),
("Comando Metal Tricolor"),
("Pantera Tricolor"),
("Caveira Tricolor"),
("Coração Tricolor");