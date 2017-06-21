# Dumbledore Dies

## Synopsis

A **framework** written in JavaScript to get random spoilers from all your favorite shows. Ruin your friends day with the biggest spoilers.

## Code Example

```
Dumble({

    target:'spoiler-template',
    random: 'true',
    series: ['Suits', 'Breaking Bad', 'Game of Thrones', 'Sons of Anarchy'] // uit welke series mogen er spoilers getoond worden
			
});
```

Series added so far:

* Breaking Bad
* Sons of Anarchy
* Game of Thrones
* Suits


## Installation

Download the _dumbledoredies.js_ file and import it at the top of your code.
```
<script src="PATH_TO_YOUR_SCRIPTS\dumbledoredies.js"></script>
```
## API Reference

At the top of the script you can edit some settings.

```
target = 'spoiler';
```

Here you can set the div in which the spoiler should be shown.

```
random = true; 
```
If you want only 1 spoiler to show, instead of every refresh another one. Set this to __false__.

```
series = ["Suits", "Game of Thrones", "Breaking Bad"]; 
```

```
series = 'Suits';
```

In this array you can set the series it should spoil from. You can chose between an array of series, or just a string. Make sure the string is not mispelled.




## License

A short snippet describing the license (MIT, Apache, etc.)