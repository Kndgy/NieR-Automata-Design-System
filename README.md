# Nier Automata Design System
Rebuilding and translating Nier Automata Design System into React components

# Table of Contents
- [General Information](#general-information)
- [Links](#Links)
- [Components / UI LIbrary](#components-ui-library)
- [Props Explanation](#props-explanation)
- [Stacks](#Stacks)
- [To do](#to-do)

# General Information
Nier Automata UI as React UI Library, Translating designs from the game into React component, Aiming to look and feels as close as possible to the native experience on the game. There are also some several others project im developing in this repository such as the mini game, and some basic chat app with Yorha Signature Interface in this project.

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

# Variants and Props Explanations
To do

# Stacks
- React with TypeScript 
- Styled Components (UI Library is dependant on it)
- Storybook with webpack
- Sass
- Rollup

#### to do : 
- font size on atom level component
- Animations Transitions
- loading splash screen