# Nier Automata Design System (WIP)

a Wiki site with in-game native User Interface Design. and React component UI libary based on Nier Automata User Interface.

# Table of Contents
- [General Information](#general-information)
- [Links](#links)
- [Components](#components)
- [Variants and Props Explanation](#variants-and-props-explanations)
- [Stacks](#stacks)
- [To do](#to-do)

# General Information
Yorha Archive - website to see all about in game resources and informations such as quest, weapons, items, novel, etc, that you would normally see in wiki, but with the native game user interface design. 
giving the feelings as if yo are viewing them from the game itself.
<br><br>
Ui Library - React component library based on Nier Automata User Interface, translating them from in game into web components.
<br> <br> There are also several others project im developing in this repository such as the mini game, and some basic chat app with Yorha Signature Interface in this project.

# Links
### [YoRha Archive Website](https://yorha-archive.netlify.app/) - Informations, journal, and codex from Nier Automata with its signature settings design i built in this project.

### [UI Library](https://nier-ui-storybook.netlify.app/) - React components library i built and use for this project, you can try it by downloading it from npm or see it on Storybook.
### [Project Repository](https://github.com/Kndgy/NieR-Automata-Design-System)

# Components
Components | Variants | Props | Default
--- | --- | --- | --- |
Title | - | title = string <br> subtitle = string | -
Bar | Light, Dark | dark = boolean | light |
Button | Button, Checkbox | variant = button / checkbox<br>text = string <br>disabled = boolean | button |
Footer | - | Text = string | - |
ScrollElement | - | Content = ReactNode | - |
ScrollElement Tab | - | Content = ReactNode | - |
Strip | - | - | - |
Widget | Light, Dark | Dark = boolean <br> title = string <br> content = ReactNode <br> icon (wip) <br> lvl = string / number | Light |
Yorha NavLink | button <br> nav <br> transparent <br> neutral | text = string <br> to = string <br> filter = string <br>className = string <br> disabled = boolean <br> filterType = string <br> variant = button / nav / transparent / netural| nav |
DropDown | - | title = string <br> content = react.node | - 

# Variants and Props Explanations
To do

# Stacks
- React with TypeScript 
- Styled Components (UI Library is dependant on it)
- Storybook with webpack
- Sass
- Rollup

# to do : 
- font size on atom level component
- Animations Transitions
- loading splash screen