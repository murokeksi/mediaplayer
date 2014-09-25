CREATE DATABASE mediaplayer; -- luo tietokanta

USE mediaplayer; -- käytä tietokantaa

CREATE TABLE kayttaja (id INT, PRIMARY KEY (id), tunnus VARCHAR(60), salasana VARCHAR(60));
CREATE TABLE kappale(id INT, PRIMARY KEY (id), pituus VARCHAR(16), artisti VARCHAR(20), genre VARCHAR(20), nimi VARCHAR(20), linkki VARCHAR(60));
CREATE TABLE soittolista (kappaleid INT, kayttajaid INT, FOREIGN KEY (kappaleid) REFERENCES kappale(id), FOREIGN KEY (kayttajaid) REFERENCES kayttaja(id));

INSERT INTO kayttaja VALUES(1, 'jussi', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'); //Kayttaja hashilla


INSERT INTO kappale VALUES (5, '0:50', 'matyze','nes','Rose Flats','http://opengameart.org/sites/default/files/Rose%20Flats.wav');
INSERT INTO kappale VALUES (6, '1:06', 'SketchyLogic','nes','Boss','http://opengameart.org/sites/default/files/Boss.ogg');
INSERT INTO kappale VALUES (7, '0:25', 'SketchyLogic','nes','Venus','http://opengameart.org/sites/default/files/Venus.ogg');
INSERT INTO kappale VALUES (9, '0:25', 'Super','nes','Slam','http://sieni.us/superslamextended.mp3');
INSERT INTO kappale VALUES (10, '0:25', 'Sad Violin','nes','Bad Romance','http://a.tumblr.com/tumblr_matd1rqV2m1r5rjroo1.mp3');

INSERT INTO soittolista VALUES(7,1);
INSERT INTO soittolista VALUES(6,1);
INSERT INTO soittolista VALUES(5,1);





