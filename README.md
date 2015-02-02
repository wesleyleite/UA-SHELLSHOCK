UA-SHELLSHOCK
=============

Chrome extension injeção de comando via 'User-Agent'.

Active icon
=============

![alt tag](https://github.com/wesleyleite/UA-SHELLSHOCK/blob/master/img/active-icon1.png)

Inactive icon
=============

![alt tag](https://github.com/wesleyleite/UA-SHELLSHOCK/blob/master/img/no-active-icon.png)

INFORMAÇÕES
=============
Este projeto é educacional, apenas demonstrando o quanto seria fácil criar uma extensão para o google chrome com intuito de explorar a recente falha do Bash.

Ao ativar a extensão, qualquer página que navegar o plugin irá injetar um comando no User-Agent, é fácil de ser detectado e pode gerar problemas caso teste isso no mundo real, utilize-o apenas em ambiente de teste para evitar problemas com a justiça.

Como Desenvolvedor da extensão, retiro toda minha responsabilidade quanto ao mau uso do mesmo, utilize para testar seu ambiente corporativo se é seguro e caso tenha permissão para o mesmo, utilize para testar a segurança de seus clientes caso tenha permissão para o mesmo, utilize-o para aprender alguma técnica nova.

Cuidado
=============
A extensão utiliza o User-Agent para injetar o comando, existem outras formas de não ser detectado em um ataque deste tipo, tais como injetar comandos diretamente no cookie, uma vez que, este não é logado no access_log do apache, neste caso contando diretamente com a preocupação do sysadmin em logar cookie na aplicação, muitos sites já estão implementando medidas para bloquear o ataque, sendo assim novamente cuidado, não utilize em ambientes que não tenha permissão para executar.


Ao finalizar seus testes desative a extensão no navegador e tenha certeza de sempre desativar quando não for usar.


Referência
=============
https://developer.chrome.com/extensions/webRequest
