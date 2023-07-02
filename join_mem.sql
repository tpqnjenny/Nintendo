create table join_mem(
  num int not null auto_increment,
  id varchar(80) not null,
  pw varchar(15) not null,
  name varchar(10) not null,
  primary key(num)
)engine=innoDB charset=utf8;