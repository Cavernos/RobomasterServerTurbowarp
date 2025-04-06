---
Title: "Rapport"
author: "Louis DUBOIS"
date: ""
output: 
    html_document: 
    css: ./style.css
    self_containes: no
---
<style src="./style.css">
    * {
    text-align: justify;
}
ol {
    list-style-type: upper-roman;
}
ol ol {
    list-style-type: decimal;
}
ol ol ol {
    list-style-type: lower-alpha;
}
.center {
    text-align: center;
}
.caption {
    font-size: 11px;
    font-style: italic;
    margin: 0;
    padding: none;
}

</style>

<h1 class="center">CT.2410 – Robotique <br/> Rapport</h1>

Louis **DUBOIS**

# Table des Matières
1.   [Introduction](#introduction)
2.  [Etude préliminaire](#etude-préliminaire)
4.  [Mise en place de l'environnement de développement](#mise-en-place-de-lenvironnement-de-développement)
    1. [Configuration de Python](#configuration-de-python)
        1. [Installation de Python 3.8.9](#installation-de-python-389)
            - [Windows](#windows)
            - [Linux](#linux)
            - [MacOS](#macos)


# Introduction
Le principe de ce projet est de réaliser une API pour le robot en python. Notre but est donc de comprendre comment fonctionne l’API avec la programmation en block de type scratch pour pouvoir ensuite rajouter des fonctionnalités en python. Nous avons donc étudié la possibilité d’utiliser un autre éditeur Blockly que l’application du robot et nous sommes intéresser à la façon avec laquelle le robot avait la possibilité de communiquer entre lui et l’application. Une fois que cela a été compris nous avons pu utiliser Turbowarp pour la partie block et une api python pour la communication avec le robot.

# Etude préliminaire

Tout d’abord, il nous a fallu nous initier au logiciel et découvrir les possibilités de programmation avec l’api de type scratch sur le robot. Nous avons donc créé un premier programme ci-dessous :

![Programme d'initiation en blockly](./image/figure_1.png)
<p class="center caption">Figure 1 Programme d'initiation en blockly</p>

Une fois ce programme réalisé et la configuration mise en place sur notre ordinateur pour développer en python, nous avons donc essayer de reproduire ce programme en python. Le code est disponible ci-dessous :  

```python
from robomaster import robot
if __name__ == "__main__":
     ep_robot = robot.Robot()
     try:
         ep_robot.initialize()
         timer = 0 
         robot_led_module = ep_robot.led
         while timer != 10:
             if timer%2 == 0:
                 robot_led_module.set_led(comp=led.COMP_ALL, r=255, g=0, b=0, effect=led.EFFECT_ON)
             else:
                 robot_led_module.set_led(comp=led.COMP_ALL, r=0, g=255, b=0, effect=led.EFFECT_ON)
             time.sleep(1)
             timer+=1
     except Exception as e:
         print(e)
         ep_robot.close()
    ep_robot.close()
```
<p class="center caption">Code 1 Equivalent python du programme du dessus</p>

Une fois cette étape réalisée nous avons pu comprendre comment le robot transcrivait les blocks en instruction compréhensible par lui. Cela était possible grâce un sdk python disponible sur le site des développeurs du robot disponible à l’adresse suivante : [Robomaster SDK](http://robomaster-dev.readthedocs.io/en/latest/). Nous avons donc suivi les premières étapes du tutoriel de ce lien que nous allons récapituler dans la section suivante.

# Mise en place de l’environnement de développement
Pour commencer le développement du projet, il nous a fallu mettre en place un environnement de développement. On a donc créer un nouveau dossier et nous sommes placé à l'intérieur:

```shell
mkdir robomaster-extension
cd robomaster-extension
```
<p class="center caption">Code 2 Création du dossier du projet</p>

Une fois ce dossier créer, nous avons configuré les outils pour pouvoir utiliser le SDK du robot.

## Configuration de Python

### Installation de Python 3.8.9
Avant de pouvoir configurer python, il nous a fallu installer la bonne version de python. Celle indiqué sur la documentation est 3.8.9.

Pour ce faire, on a suivi les étapes d'installation disponible sur le site de [python](http://python.org):

#### Windows
Pour Windows avec un installateur de packet:
```shell
choco install python --version=3.8.9
# Si une version de python est déjà installer il faut changer la variable d'environnement Path
```
In Search, search for System and then select: System (Control Panel)<br/>
Click the Advanced system settings link<br/>
Click Environment Variables. In the section System Variables find PATH environment variable and select it. Click Edit.

Une fois que vous avez la variable d'environnement sous les yeux, cherchez : 
```
"C:\Users\\{Votre nom}\AppData\Local\Programs\Python\Python{Version}"
```
Si la version de python est différente que 38 alors remplacez la par 38.
 
Pour vérifier que python est bien installé :

```shell
python --version
```

#### Linux



#### MacOs

