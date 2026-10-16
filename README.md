| Component | What it shows | Where its values come from | What it remembers | What it receives |
| --- | --- | --- | --- | --- |
| `Header` | my name and a line about me | typed into the JSX | — | - |
| `Hero` | my hero photos | heroPhoto, which calls imageUrl | which photo is showing, color, sepia, and blur settings | - |
| `About` | information about me | typed into the JSX | — | - |
| `Skills` | my coding skills | typed into the JSX | — | - |
| `Greeting` | a greeting that changes with the hour | `hour` and `greeting` variables | — | - |
| `Fortune` | a random fortune | a list and `randomNumber` | which fortune is showing | - |
| `Footer` | © and the current year | the year the page is opened | — | - |
| `GitHubLink` | a link to my GitHub | `url` and `label` variables | — | - |
| `ProjectCount` | the number of projects I have shipped | the `projects` list | — | - |
| `ProjectCard` | one project: its name, description, details, and two links | `projects.js`, through `App` | its likes, and whether it shows more | `project` |

## What I added

- Color and Black and White buttons on my hero
- More Blur and No Blur buttons on my hero
- Previous and Next buttons to change photos
- A New Fortune button
- Show More and Show Less buttons on every portfolio card
- A Like button on every card