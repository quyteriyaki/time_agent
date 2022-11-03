Funny Time Travel Game

Main plot line:
Do objectives for xxx without fucking up

Mechanical catch: events affect timeline.

Mechanics:
A map: navigate around a fixed area/s
A timeline: at xx:xx time, a certain character will be at a certain place. You "can" influence your past actions.

Goal 1: Kill "Figure X"
Play -> Find location of Figure X -> Kill Figure X
Criteria:
- Find Figure X before xx

# General Plot line
Laboratory operations (Present)
- Long time ago, A biochemical weapon had been developed and devastated a country
- Present day, analyse the weapon used "for research".
- No samples of it remains, need to go back in time during development to find out.
- Rough date is found, goal is to travel back to that time, return samples to present.
- Introduction presentation concludes.
- The plan of operation explained, MC's role is introduced. [ interactions enabled here] 
- Explain the other roles of the members.
- Free time until specific time.

- Operation begins
- 
Biochemical weapon operations (Past)
- Organisation XXX working on weapon.
- Chemical development
- Engineered vessel development


Player objectives:
- Acquire samples of chemical
	- Caveat: requires 3 different solutions & specs
- Acquire development structure of the vessel
	- Caveat: development model also split to different locations
		- 1 is moving with a high rank person
- Acquire information of associated members (database)
Side objectives:
- Destroy the vessel
- Suppress the enemy organisation (weapons are available)
- Suppress your organisation (if find out the truth)

# Core mechanics to test
- Character entities
- Location
- Items
- Time
- Scheduled AI
- GOAP AI


# Order of mechanics to implement
- [ ] Add basic characters
- [ ] Super basic interaction
- [x] Add locations
- [x] Move between location
- [x] Generate locations (for rendering)
- [ ] AI Move between location
- [ ] Add time and time taken to travel
- [ ] Add record
- [ ] Replay movement record

## Framework of interaction
```
> Go to laboratory

# Awareness is a calculated sum of the actions prior for all entities
[Awareness = 0] He seems to be focusing on his work that he could not hear you enter the room
[Awareness = 25] "Oh?" It seems he heard the door open.
[Awareness = 50] ....

# Familiarity is based on knowledge of both characters. Of course, some characters may forcefully know another person unknowingly. (e.g. A knows B, B does not know A)
[Persistent]
- Action they are doing
[Familiarity = 0]
- Visual appearance of the person
[Familiarity = 25]
- Recall limited information
	- Previous description, past tense
[Familiarity = 50]
- Recall name
[Familiarity = high]
- Unique interaction

# Actions can be performed based on whatever that is possible (for now). All actions "should" progress the game.
- Interact with [characters]
	- Address to all [characters] in room
	- Address to self [verbally | mentally]
- Interact with [objects]
- Senses
	- Listen (ambient | conversation (if character))
	- Observe (character (themself | action) | object)
	- Smell (????)
- Literally do nothing
```

## Suspicion Interaction
```
Go to laboratory

# Dependent on awareness level. Most suspicion interactions will be at +25 or so
[Awareness = 25] Thinks something is wrong
[Awareness = 50] Knows general direction
[Awareness = 100] Knows identity & direction

# Needs to have a reason to interact, based on goal
# E.g. goal = unauthorized entities = 0
# E.g. knowledge.count increase

[Suspicion = 0] "Who are you?"
	# Zone lock is the starting point, but these scale on suspicion growth
	- [Zone lock or Suspicion = 25] "You shouldn't be here"
	- [Zone lock or Suspicion = 50]
```

## Hyper structure
Game Controller
- Map
	- World (space)
		- Characters
			- Outfit
			- Inventory
				- Objects
			- Relationships
			- Actions
		- Objects
	- Timeline (time)
		- Characters
			- Actions

## Character entities
### Properties
- ID - In the case of time looped players
- Name
- Affiliation: Which "side" the character is on, this is used for simplicity. For more complex models, relation chart can be used.
- Relation chart - Used to track knowledge, suspicion and count of interactions
  - May require an affiliation base relation for new interactions
- Goals
- Current action / action queue
### Actions
- Respond
  - A text nature with context
    - E.g. "who are you"
      - Question, Identity
- Conversation starter
  - The nature of the game will often have characters suspicious of most characters outside of the loop
    - Characters within the loop will have a fixed starting sus meter
    - Characters outside of the loop will be treated as suspicious
    - 
- Move
  - Go to a specific room
  - Pathfind to destination
    - Pathfind to destination the fastest (or flair oriented)
  - Manipulate items
    - Take, place, give

## Player entity -> Character
### Properties
- Modified relation chart
  - Now has optional ID to track time looped player
### Actions
- Iterate through the following categories of actions
	- Interact with characters
		- Interact with self
			- Out loud
			- Thinking
	- Interact with objects
		- Each object has their own interactable features
	- Interact through senses
		- Observe
			- Object
			- Character
				- Visual appearance
				- Action performed
		- Listen
			- Environment
			- Object
			- Character
				- Conversation

## AI Entities
When you think about it, AI entities don't necessarily HAVE to have a timeline that pre-defines their actions? We can use GOAP to ask.
But there might be scheduled events, e.g. a secret meeting that's to take place between certain characters. Those might be pre-defined (i.e. kept in the head until it's soon)

GOAP Model
- Requires a goal
- Uses knowledges to determine how to achieve goal
- Types of knowledge
	- Location
	- Characters
	- Entity (where they are located, if it's acquisition)

If there's a final product that the organisation is working towards, we can easily develop goals for it.


### Map 
- Location
  - ID, Name, Description, People, Items
- Connections
  - Connection hallways


## How to render the map (starting sequence)
1. Move to an initialization page
2. Generate the first connected room
3. Change the currentLocation
4. Move to connected room

## How to render the map
1. Render current room
2. Generate next rooms


## Events
Events are mainly a series of actions that happen

- Series of actions that the player can perform
- For now, permutate over the following:
  - Conversational interrupts
    - While someone is talking, if the player presses interrupt, the prompt pauses and the player can ask anything or do anything
  - Conversational responses
    - Determine a topic, find anything associated with the topic, generate responses
  - Neutral
    - Look around or something
  - Active
    - Perform a room action



## Event sequence
- But event sequences are emergent?

-https://www.rockpapershotgun.com/how-hitmans-hokkaido-level-was-made