//const rcolor =  "#"+((1<<24)*Math.random()|0).toString(16); 

let hexCode = [
  {
    color: "Indian Red",
    code: {
      hex: "#B0171F"
    },
    id: 1
  },

  {
    color: "Crimson	",
    code: {
      hex: "#DC143C	"
    },
    id: 2
  },

  {
    color: "LightPink	",
    code: {
      hex: "#FFB6C1	"
    },
    id: 4
  },

  {
    color: "LightPink 1	 ",
    code: {
      hex: "#FFAEB9	"
    },
    id: 4
  },

  {
    color: "LightPink 2	 ",
    code: {
      hex: "#EEA2AD	"
    },
    id: 5
  },

  {
    color: "LightPink 3	 ",
    code: {
      hex: "#CD8C95	"
    },
    id: 6
  },

  {
    color: "LightPink 4	 ",
    code: {
      hex: "#8B5F65	"
    },
    id: 7
  },

  {
    color: "Pink	",
    code: {
      hex: "#FFC0CB	"
    },
    id: 8
  },

  {
    color: "Pink 1",
    code: {
      hex: "#FFB5C5	"
    },
    id: 9
  },

  {
    color: "Pink 2",
    code: {
      hex: "#EEA9B8	"
    },
    id: 10
  },

  {
    color: "Pink 3",
    code: {
      hex: "#CD919E	"
    },
    id: 11
  },

  {
    color: "Pink 4",
    code: {
      hex: "#8B636C"
    },
    id: 12
  },

  {
    color: "PalevioletRed	",
    code: {
      hex: "#DB7093"
    },
    id: 13
  },

  {
    color: "PalevioletRed 1	",
    code: {
      hex: "#FF82AB"
    },
    id: 14
  },

  {
    color: "PalevioletRed 2	",
    code: {
      hex: "#EE799F"
    },
    id: 15
  },

  {
    color: "PalevioletRed 3	",
    code: {
      hex: "#CD6889"
    },
    id: 16
  },

  {
    color: "PalevioletRed 4	",
    code: {
      hex: "#8B475D"
    },
    id: 17
  },

  {
    color: "lavenderblush 1 (lavenderblush)	",
    code: {
      hex: "#FFF0F5"
    },
    id: 18
  },

  {
    color: "lavenderblush 2	",
    code: {
      hex: "#EEE0E5"
    },
    id: 19
  },

  {
    color: "lavenderblush 3	",
    code: {
      hex: "#CDC1C5"
    },
    id: 20
  },

  {
    color: "lavenderblush 4	",
    code: {
      hex: "#8B8386"
    },
    id: 21
  },

  {
    color: "violetRed 1	",
    code: {
      hex: "#FF3E96"
    },
    id: 22
  },

  {
    color: "violetRed 2	",
    code: {
      hex: "#EE3A8C"
    },
    id: 23
  },

  {
    color: "violetRed 3	",
    code: {
      hex: "#CD3278"
    },
    id: 24
  },

  {
    color: "violetRed 4	",
    code: {
      hex: "#8B2252"
    },
    id: 25
  },

  {
    color: "hotPink	",
    code: {
      hex: "#FF69B4"
    },
    id: 26
  },

  {
    color: "hotPink 1	",
    code: {
      hex: "#FF6EB4"
    },
    id: 27
  },

  {
    color: "hotPink 2	",
    code: {
      hex: "#EE6AA7"
    },
    id: 28
  },

  {
    color: "hotPink 3	",
    code: {
      hex: "#CD6090"
    },
    id: 29
  },

  {
    color: "hotPink 4	",
    code: {
      hex: "#8B3A62"
    },
    id: 30
  },

  {
    color: "raspberry	",
    code: {
      hex: "#872657"
    },
    id: 31
  },

  {
    color: "deepPink 1 (deepPink)	",
    code: {
      hex: "#FF1493"
    },
    id: 32
  },

  {
    color: "deepPink 2	",
    code: {
      hex: "#EE1289"
    },
    id: 33
  },

  {
    color: "deepPink 3	",
    code: {
      hex: "#CD1076"
    },
    id: 34
  },

  {
    color: "deepPink 4	",
    code: {
      hex: "#8B0A50"
    },
    id: 35
  },

  {
    color: "maroon 1	",
    code: {
      hex: "#FF34B3"
    },
    id: 36
  },

  {
    color: "maroon 2	",
    code: {
      hex: "#EE30A7"
    },
    id: 37
  },

  {
    color: "maroon 3	",
    code: {
      hex: "#CD2990"
    },
    id: 38
  },

  {
    color: "mediumvioletRed",
    code: {
      hex: "#C71585"
    },
    id: 39
  },

  {
    color: "violetRed	",
    code: {
      hex: "#D02090"
    },
    id: 40
  },

  {
    color: "orchid	",
    code: {
      hex: "#DA70D6"
    },
    id: 41
  },

  {
    color: "orchid 1	",
    code: {
      hex: "#FF83FA"
    },
    id: 42
  },

  {
    color: "orchid 2	",
    code: {
      hex: "#EE7AE9"
    },
    id: 43
  },

  {
    color: "orchid 3	",
    code: {
      hex: "#CD69C9"
    },
    id: 44
  },

  {
    color: "orchid 4	",
    code: {
      hex: "#8B4789"
    },
    id: 45
  },

  {
    color: "thistle	",
    code: {
      hex: "#D8BFD8"
    },
    id: 46
  },

  {
    color: "thistle 1	",
    code: {
      hex: "#FFE1FF"
    },
    id: 47
  },

  {
    color: "thistle 2	",
    code: {
      hex: "#EED2EE"
    },
    id: 48
  },

  {
    color: "thistle 3	",
    code: {
      hex: "#CDB5CD"
    },
    id: 49
  },

  {
    color: "thistle 4	",
    code: {
      hex: "#8B7B8B"
    },
    id: 50
  },

  {
    color: "Plum 1	",
    code: {
      hex: "#FFBBFF"
    },
    id: 51
  },

  {
    color: "Plum 2	",
    code: {
      hex: "#EEAEEE"
    },
    id: 52
  },

  {
    color: "Plum 3	",
    code: {
      hex: "#CD96CD"
    },
    id: 53
  },

  {
    color: "Plum 4	",
    code: {
      hex: "#8B668B"
    },
    id: 54
  },

  {
    color: "Plum	",
    code: {
      hex: "#DDA0DD"
    },
    id: 55
  },

  {
    color: "violet	",
    code: {
      hex: "#EE82EE"
    },
    id: 56
  },

  {
    color: "Magenta (fuchsia*)	",
    code: {
      hex: "#FF00FF"
    },
    id: 57
  },

  {
    color: "Magenta 2	",
    code: {
      hex: "#EE00EE"
    },
    id: 58
  },

  {
    color: "Magenta 3	",
    code: {
      hex: "#CD00CD"
    },
    id: 59
  },

  {
    color: "Magenta 4 (DarkMagenta)	",
    code: {
      hex: "#8B008B"
    },
    id: 60
  },

  {
    color: "Purple*	",
    code: {
      hex: "#800080"
    },
    id: 61
  },

  {
    color: "Mediumorchid	",
    code: {
      hex: "#BA55D3"
    },
    id: 62
  },

  {
    color: "Mediumorchid 1	",
    code: {
      hex: "#E066FF"
    },
    id: 63
  },

  {
    color: "Mediumorchid 2	",
    code: {
      hex: "#D15FEE"
    },
    id: 64
  },

  {
    color: "Mediumorchid 3	",
    code: {
      hex: "#B452CD"
    },
    id: 65
  },

  {
    color: "Mediumorchid 4	",
    code: {
      hex: "#7A378B"
    },
    id: 66
  },

  {
    color: "Darkviolet	",
    code: {
      hex: "#9400D3"
    },
    id: 67
  },

  {
    color: "Darkorchid	",
    code: {
      hex: "#9932CC"
    },
    id: 68
  },

  {
    color: "Darkorchid 1	",
    code: {
      hex: "#BF3EFF"
    },
    id: 69
  },

  {
    color: "Darkorchid 2	",
    code: {
      hex: "#B23AEE"
    },
    id: 70
  },

  {
    color: "Darkorchid 3	",
    code: {
      hex: "#9A32CD"
    },
    id: 71
  },

  {
    color: "Darkorchid 4	",
    code: {
      hex: "#68228B"
    },
    id: 72
  },

  {
    color: "Indigo	",
    code: {
      hex: "#4B0082"
    },
    id: 73
  },

  {
    color: "Blueviolet	",
    code: {
      hex: "#8A2BE2"
    },
    id: 74
  },

  {
    color: "Purple 1	",
    code: {
      hex: "#9B30FF"
    },
    id: 75
  },

  {
    color: "Purple 2	",
    code: {
      hex: "#912CEE"
    },
    id: 76
  },

  {
    color: "Purple 3	",
    code: {
      hex: "#7D26CD"
    },
    id: 77
  },

  {
    color: "Purple 4	",
    code: {
      hex: "#551A8B"
    },
    id: 78
  },

  {
    color: "mediumPurple	",
    code: {
      hex: "#9370DB"
    },
    id: 79
  },

  {
    color: "mediumPurple 1	",
    code: {
      hex: "#AB82FF"
    },
    id: 80
  },

  {
    color: "mediumPurple 2	",
    code: {
      hex: "#9F79EE"
    },
    id: 81
  },

  {
    color: "mediumPurple 3	",
    code: {
      hex: "#8968CD"
    },
    id: 82
  },

  {
    color: "mediumPurple 4	",
    code: {
      hex: "#5D478B"
    },
    id: 83
  },

  {
    color: "DarkslateBlue	",
    code: {
      hex: "#483D8B"
    },
    id: 84
  },

  {
    color: "LightslateBlue	",
    code: {
      hex: "#8470FF"
    },
    id: 85
  },

  {
    color: "mediumslateBlue	",
    code: {
      hex: "#7B68EE"
    },
    id: 86
  },

  {
    color: "slateBlue	",
    code: {
      hex: "#6A5ACD"
    },
    id: 87
  },

  {
    color: "slateBlue 1	",
    code: {
      hex: "#836FFF"
    },
    id: 88
  },

  {
    color: "slateBlue 2	",
    code: {
      hex: "#7A67EE"
    },
    id: 89
  },

  {
    color: "slateBlue 3	",
    code: {
      hex: "#6959CD"
    },
    id: 90
  },

  {
    color: "slateBlue 4	",
    code: {
      hex: "#473C8B"
    },
    id: 91
  },

  {
    color: "ghostwhite	",
    code: {
      hex: "#F8F8FF"
    },
    id: 92
  },

  {
    color: "lavender	",
    code: {
      hex: "#E6E6FA"
    },
    id: 93
  },

  {
    color: "Blue*	",
    code: {
      hex: "#0000FF"
    },
    id: 94
  },

  {
    color: "Blue 2	",
    code: {
      hex: "#0000EE"
    },
    id: 95
  },

  {
    color: "Blue 3 (mediumBlue)	",
    code: {
      hex: "#0000CD"
    },
    id: 96
  },

  {
    color: "Blue 4 (DarkBlue)	",
    code: {
      hex: "#00008B"
    },
    id: 97
  },

  {
    color: "navy*	",
    code: {
      hex: "#000080"
    },
    id: 98
  },

  {
    color: "midnightBlue	",
    code: {
      hex: "#191970"
    },
    id: 99
  },

  {
    color: "cobalt	",
    code: {
      hex: "#3D59AB"
    },
    id: 100
  },

  {
    color: "royalBlue	",
    code: {
      hex: "#4169E1"
    },
    id: 101
  },

  {
    color: "royalBlue 1	",
    code: {
      hex: "#4876FF"
    },
    id: 102
  },

  {
    color: "royalBlue 2	",
    code: {
      hex: "#436EEE"
    },
    id: 103
  },

  {
    color: "royalBlue 3	",
    code: {
      hex: "#3A5FCD"
    },
    id: 104
  },

  {
    color: "royalBlue 4	",
    code: {
      hex: "#27408B"
    },
    id: 105
  },

  {
    color: "cornflowerBlue	",
    code: {
      hex: "#6495ED"
    },
    id: 106
  },

  {
    color: "LightsteelBlue	",
    code: {
      hex: "#B0C4DE"
    },
    id: 107
  },

  {
    color: "LightsteelBlue 1	",
    code: {
      hex: "#CAE1FF"
    },
    id: 108
  },

  {
    color: "LightsteelBlue 2	",
    code: {
      hex: "#BCD2EE"
    },
    id: 109
  },

  {
    color: "LightsteelBlue 3	",
    code: {
      hex: "#A2B5CD"
    },
    id: 110
  },

  {
    color: "LightsteelBlue 4	",
    code: {
      hex: "#6E7B8B"
    },
    id: 111
  },

  {
    color: "LightslateGray	",
    code: {
      hex: "#778899"
    },
    id: 112
  },

  {
    color: "slateGray	",
    code: {
      hex: "#708090"
    },
    id: 113
  },

  {
    color: "slateGray 1	",
    code: {
      hex: "#C6E2FF"
    },
    id: 114
  },

  {
    color: "slateGray 2	",
    code: {
      hex: "#B9D3EE"
    },
    id: 115
  },

  {
    color: "slateGray 3	",
    code: {
      hex: "#9FB6CD"
    },
    id: 116
  },

  {
    color: "slateGray 4	",
    code: {
      hex: "#6C7B8B"
    },
    id: 117
  },

  {
    color: "dodgerBlue 1 (dodgerBlue)",
    code: {
      hex: "#1E90FF"
    },
    id: 118
  },

  {
    color: "dodgerBlue 2",
    code: {
      hex: "#1C86EE"
    },
    id: 119
  },

  {
    color: "dodgerBlue 3",
    code: {
      hex: "#1874CD"
    },
    id: 120
  },

  {
    color: "dodgerBlue 4",
    code: {
      hex: "#104E8B"
    },
    id: 121
  },

  {
    color: "aliceBlue",
    code: {
      hex: "#F0F8FF"
    },
    id: 122
  },

  {
    color: "steelBlue",
    code: {
      hex: "#4682B4"
    },
    id: 123
  },

  {
    color: "steelBlue 1",
    code: {
      hex: "#63B8FF"
    },
    id: 124
  },

  {
    color: "steelBlue 2",
    code: {
      hex: "#5CACEE"
    },
    id: 125
  },

  {
    color: "steelBlue 3",
    code: {
      hex: "#4F94CD"
    },
    id: 126
  },

  {
    color: "steelBlue 4",
    code: {
      hex: "#36648B"
    },
    id: 127
  },

  {
    color: "LightskyBlue",
    code: {
      hex: "#87CEFA"
    },
    id: 128
  },

  {
    color: "LightskyBlue 1",
    code: {
      hex: "#B0E2FF"
    },
    id: 129
  },

  {
    color: "LightskyBlue 2",
    code: {
      hex: "#A4D3EE"
    },
    id: 130
  },

  {
    color: "LightskyBlue 3",
    code: {
      hex: "#8DB6CD"
    },
    id: 131
  },

  {
    color: "LightskyBlue 4",
    code: {
      hex: "#607B8B"
    },
    id: 132
  },

  {
    color: "skyBlue 1",
    code: {
      hex: "#87CEFF"
    },
    id: 133
  },

  {
    color: "skyBlue 2",
    code: {
      hex: "#7EC0EE"
    },
    id: 134
  },

  {
    color: "skyBlue 3",
    code: {
      hex: "#6CA6CD"
    },
    id: 135
  },

  {
    color: "skyBlue 4",
    code: {
      hex: "#4A708B"
    },
    id: 136
  },

  {
    color: "skyBlue",
    code: {
      hex: "#87CEEB"
    },
    id: 137
  },

  {
    color: "deepskyBlue 1 (deepskyBlue)",
    code: {
      hex: "#00BFFF"
    },
    id: 138
  },

  {
    color: "deepskyBlue 2",
    code: {
      hex: "#00B2EE"
    },
    id: 139
  },

  {
    color: "deepskyBlue 3",
    code: {
      hex: "#009ACD"
    },
    id: 140
  },

  {
    color: "deepskyBlue 4",
    code: {
      hex: "#00688B"
    },
    id: 141
  },

  {
    color: "peacock",
    code: {
      hex: "#33A1C9"
    },
    id: 142
  },

  {
    color: "LightBlue",
    code: {
      hex: "#ADD8E6"
    },
    id: 143
  },

  {
    color: "LightBlue 1",
    code: {
      hex: "#BFEFFF"
    },
    id: 144
  },

  {
    color: "LightBlue 2",
    code: {
      hex: "#B2DFEE"
    },
    id: 145
  },

  {
    color: "LightBlue 3",
    code: {
      hex: "#9AC0CD"
    },
    id: 146
  },

  {
    color: "LightBlue 4",
    code: {
      hex: "#68838B"
    },
    id: 147
  },

  {
    color: "powderBlue",
    code: {
      hex: "#B0E0E6"
    },
    id: 148
  },

  {
    color: "cadetBlue 1",
    code: {
      hex: "#98F5FF"
    },
    id: 149
  },

  {
    color: "cadetBlue 2",
    code: {
      hex: "#8EE5EE"
    },
    id: 150
  },

  {
    color: "cadetBlue 3",
    code: {
      hex: "#7AC5CD"
    },
    id: 151
  },

  {
    color: "cadetBlue 4",
    code: {
      hex: "#53868B"
    },
    id: 152
  },

  {
    color: "Turquoise 1",
    code: {
      hex: "#00F5FF"
    },
    id: 153
  },

  {
    color: "Turquoise 2",
    code: {
      hex: "#00E5EE"
    },
    id: 154
  },

  {
    color: "Turquoise 3",
    code: {
      hex: "#00C5CD"
    },
    id: 155
  },

  {
    color: "Turquoise 4",
    code: {
      hex: "#00868B"
    },
    id: 156
  },

  {
    color: "cadetBlue",
    code: {
      hex: "#5F9EA0"
    },
    id: 157
  },

  {
    color: "DarkTurquoise",
    code: {
      hex: "#00CED1"
    },
    id: 158
  },

  {
    color: "azure 1 (azure)",
    code: {
      hex: "#F0FFFF"
    },
    id: 159
  },

  {
    color: "azure 2",
    code: {
      hex: "#E0EEEE"
    },
    id: 160
  },

  {
    color: "azure 3",
    code: {
      hex: "#C1CDCD"
    },
    id: 161
  },

  {
    color: "azure 4",
    code: {
      hex: "#838B8B"
    },
    id: 162
  },

  {
    color: "Lightcyan 1 (Lightcyan)",
    code: {
      hex: "#E0FFFF"
    },
    id: 163
  },

  {
    color: "Lightcyan 2",
    code: {
      hex: "#D1EEEE"
    },
    id: 164
  },

  {
    color: "Lightcyan 3",
    code: {
      hex: "#B4CDCD"
    },
    id: 165
  },

  {
    color: "Lightcyan 4",
    code: {
      hex: "#7A8B8B"
    },
    id: 166
  },

  {
    color: "PaleTurquoise 1",
    code: {
      hex: "#BBFFFF"
    },
    id: 167
  },

  {
    color: "PaleTurquoise 2 (PaleTurquoise)",
    code: {
      hex: "#AEEEEE"
    },
    id: 168
  },

  {
    color: "PaleTurquoise 3",
    code: {
      hex: "#96CDCD"
    },
    id: 169
  },

  {
    color: "PaleTurquoise 4",
    code: {
      hex: "#668B8B"
    },
    id: 170
  },

  {
    color: "DarkslateGray",
    code: {
      hex: "#2F4F4F"
    },
    id: 171
  },

  {
    color: "DarkslateGray 1",
    code: {
      hex: "#97FFFF"
    },
    id: 172
  },

  {
    color: "DarkslateGray 2",
    code: {
      hex: "#8DEEEE"
    },
    id: 173
  },

  {
    color: "DarkslateGray 3",
    code: {
      hex: "#79CDCD"
    },
    id: 174
  },

  {
    color: "DarkslateGray 4",
    code: {
      hex: "#528B8B"
    },
    id: 175
  },

  {
    color: "cyan / aqua*",
    code: {
      hex: "#00FFFF"
    },
    id: 176
  },

  {
    color: "cyan 2",
    code: {
      hex: "#00EEEE"
    },
    id: 177
  },

  {
    color: "cyan 3",
    code: {
      hex: "#00CDCD"
    },
    id: 178
  },

  {
    color: "cyan 4 (Darkcyan)",
    code: {
      hex: "#008B8B"
    },
    id: 179
  },

  {
    color: "teal*",
    code: {
      hex: "#008080"
    },
    id: 180
  },

  {
    color: "mediumTurquoise",
    code: {
      hex: "#48D1CC"
    },
    id: 181
  },

  {
    color: "LightSeaGreen",
    code: {
      hex: "#20B2AA"
    },
    id: 182
  },

  {
    color: "manganeseBlue",
    code: {
      hex: "#03A89E"
    },
    id: 183
  },

  {
    color: "Turquoise",
    code: {
      hex: "#40E0D0"
    },
    id: 184
  },

  {
    color: "coldgrey",
    code: {
      hex: "#808A87"
    },
    id: 185
  },

  {
    color: "TurquoiseBlue",
    code: {
      hex: "#00C78C"
    },
    id: 186
  },

  {
    color: "aquamarine 1 (aquamarine)",
    code: {
      hex: "#7FFFD4"
    },
    id: 187
  },

  {
    color: "aquamarine 2",
    code: {
      hex: "#76EEC6"
    },
    id: 188
  },

  {
    color: "aquamarine 3 (mediumaquamarine)",
    code: {
      hex: "#66CDAA"
    },
    id: 189
  },

  {
    color: "aquamarine 4",
    code: {
      hex: "#458B74"
    },
    id: 190
  },

  {
    color: "mediumspringGreen",
    code: {
      hex: "#00FA9A"
    },
    id: 191
  },

  {
    color: "mintcream",
    code: {
      hex: "#F5FFFA"
    },
    id: 192
  },

  {
    color: "springGreen",
    code: {
      hex: "#00FF7F"
    },
    id: 193
  },

  {
    color: "springGreen 1",
    code: {
      hex: "#00EE76"
    },
    id: 194
  },

  {
    color: "springGreen 2",
    code: {
      hex: "#00CD66"
    },
    id: 195
  },

  {
    color: "springGreen 3",
    code: {
      hex: "#008B45"
    },
    id: 196
  },

  {
    color: "mediumSeaGreen",
    code: {
      hex: "#3CB371"
    },
    id: 197
  },

  {
    color: "SeaGreen 1",
    code: {
      hex: "#54FF9F"
    },
    id: 198
  },

  {
    color: "SeaGreen 2",
    code: {
      hex: "#4EEE94"
    },
    id: 199
  },

  {
    color: "SeaGreen 3",
    code: {
      hex: "#43CD80"
    },
    id: 200
  },

  {
    color: "SeaGreen 4 (SeaGreen)",
    code: {
      hex: "#2E8B57"
    },
    id: 201
  },

  {
    color: "emeraldGreen",
    code: {
      hex: "#00C957"
    },
    id: 202
  },

  {
    color: "mint",
    code: {
      hex: "#BDFCC9"
    },
    id: 203
  },

  {
    color: "cobaltGreen",
    code: {
      hex: "#3D9140"
    },
    id: 204
  },

  {
    color: "honeydew 1 (honeydew)",
    code: {
      hex: "#F0FFF0"
    },
    id: 205
  },

  {
    color: "honeydew 2",
    code: {
      hex: "#E0EEE0"
    },
    id: 206
  },

  {
    color: "honeydew 3",
    code: {
      hex: "#C1CDC1"
    },
    id: 207
  },

  {
    color: "honeydew 4",
    code: {
      hex: "#838B83"
    },
    id: 208
  },

  {
    color: "DarkSeaGreen",
    code: {
      hex: "#8FBC8F"
    },
    id: 209
  },

  {
    color: "DarkSeaGreen 1",
    code: {
      hex: "#C1FFC1"
    },
    id: 210
  },

  {
    color: "DarkSeaGreen 2",
    code: {
      hex: "#B4EEB4"
    },
    id: 211
  },

  {
    color: "DarkSeaGreen 3",
    code: {
      hex: "#9BCD9B"
    },
    id: 212
  },

  {
    color: "DarkSeaGreen 4",
    code: {
      hex: "#698B69"
    },
    id: 213
  },

  {
    color: "PaleGreen",
    code: {
      hex: "#98FB98"
    },
    id: 214
  },

  {
    color: "PaleGreen 1",
    code: {
      hex: "#9AFF9A"
    },
    id: 215
  },

  {
    color: "PaleGreen 2 (LightGreen)",
    code: {
      hex: "#90EE90"
    },
    id: 216
  },

  {
    color: "PaleGreen 3",
    code: {
      hex: "#7CCD7C"
    },
    id: 217
  },

  {
    color: "PaleGreen 4",
    code: {
      hex: "#548B54"
    },
    id: 218
  },

  {
    color: "limeGreen",
    code: {
      hex: "#32CD32"
    },
    id: 219
  },

  {
    color: "forestGreen",
    code: {
      hex: "#228B22"
    },
    id: 220
  },

  {
    color: "Green 1 (lime*)",
    code: {
      hex: "#00FF00"
    },
    id: 221
  },

  {
    color: "Green 2",
    code: {
      hex: "#00EE00"
    },
    id: 222
  },

  {
    color: "Green 3",
    code: {
      hex: "#00CD00"
    },
    id: 223
  },

  {
    color: "Green 4",
    code: {
      hex: "#008B00"
    },
    id: 224
  },

  {
    color: "Green*",
    code: {
      hex: "#008000"
    },
    id: 225
  },

  {
    color: "DarkGreen",
    code: {
      hex: "#006400"
    },
    id: 226
  },

  {
    color: "sapGreen",
    code: {
      hex: "#308014"
    },
    id: 227
  },

  {
    color: "LawnGreen",
    code: {
      hex: "#7CFC00"
    },
    id: 228
  },

  {
    color: "Chartreuse 1 (Chartreuse)",
    code: {
      hex: "#7FFF00"
    },
    id: 229
  },

  {
    color: "Chartreuse 2",
    code: {
      hex: "#76EE00"
    },
    id: 230
  },

  {
    color: "Chartreuse 3",
    code: {
      hex: "#66CD00"
    },
    id: 231
  },

  {
    color: "Chartreuse 4",
    code: {
      hex: "#458B00"
    },
    id: 232
  },

  {
    color: "GreenYellow",
    code: {
      hex: "#ADFF2F"
    },
    id: 233
  },

  {
    color: "DarkOliveGreen 1",
    code: {
      hex: "#CAFF70"
    },
    id: 234
  },

  {
    color: "DarkOliveGreen 2",
    code: {
      hex: "#BCEE68"
    },
    id: 235
  },

  {
    color: "DarkOliveGreen 3",
    code: {
      hex: "#A2CD5A"
    },
    id: 236
  },

  {
    color: "DarkOliveGreen 4",
    code: {
      hex: "#6E8B3D"
    },
    id: 237
  },

  {
    color: "DarkOliveGreen",
    code: {
      hex: "#556B2F"
    },
    id: 238
  },

  {
    color: "Olivedrab",
    code: {
      hex: "#6B8E23"
    },
    id: 239
  },

  {
    color: "Olivedrab 1",
    code: {
      hex: "#C0FF3E"
    },
    id: 240
  },

  {
    color: "Olivedrab 2",
    code: {
      hex: "#B3EE3A"
    },
    id: 241
  },

  {
    color: "Olivedrab 3 (YellowGreen)",
    code: {
      hex: "#9ACD32"
    },
    id: 242
  },

  {
    color: "Olivedrab 4",
    code: {
      hex: "#698B22"
    },
    id: 243
  },

  {
    color: "Ivory 1 (Ivory)",
    code: {
      hex: "#FFFFF0"
    },
    id: 244
  },

  {
    color: "Ivory 2",
    code: {
      hex: "#EEEEE0"
    },
    id: 245
  },

  {
    color: "Ivory 3",
    code: {
      hex: "#CDCDC1"
    },
    id: 246
  },

  {
    color: "Ivory 4",
    code: {
      hex: "#8B8B83"
    },
    id: 247
  },

  {
    color: "beige",
    code: {
      hex: "#F5F5DC"
    },
    id: 248
  },

  {
    color: "LightYellow 1 (LightYellow)",
    code: {
      hex: "#FFFFE0"
    },
    id: 249
  },

  {
    color: "LightYellow 2",
    code: {
      hex: "#EEEED1"
    },
    id: 250
  },

  {
    color: "LightYellow 3",
    code: {
      hex: "#CDCDB4"
    },
    id: 251
  },

  {
    color: "LightYellow 4",
    code: {
      hex: "#8B8B7A"
    },
    id: 252
  },

  {
    color: "LightgoldenrodYellow",
    code: {
      hex: "#FAFAD2"
    },
    id: 253
  },

  {
    color: "Yellow 1 (Yellow*)",
    code: {
      hex: "#FFFF00"
    },
    id: 254
  },

  {
    color: "Yellow 2",
    code: {
      hex: "#EEEE00"
    },
    id: 255
  },

  {
    color: "Yellow 3",
    code: {
      hex: "#CDCD00"
    },
    id: 256
  },

  {
    color: "Yellow 4",
    code: {
      hex: "#8B8B00"
    },
    id: 257
  },

  {
    color: "warmgrey",
    code: {
      hex: "#808069"
    },
    id: 258
  },

  {
    color: "Olive*",
    code: {
      hex: "#808000"
    },
    id: 259
  },

  {
    color: "Darkkhaki",
    code: {
      hex: "#BDB76B"
    },
    id: 260
  },

  {
    color: "khaki 1",
    code: {
      hex: "#FFF68F"
    },
    id: 261
  },

  {
    color: "khaki 2",
    code: {
      hex: "#EEE685"
    },
    id: 262
  },

  {
    color: "khaki 3",
    code: {
      hex: "#CDC673"
    },
    id: 263
  },

  {
    color: "khaki 4",
    code: {
      hex: "#8B864E"
    },
    id: 264
  },

  {
    color: "khaki",
    code: {
      hex: "#F0E68C"
    },
    id: 265
  },

  {
    color: "Palegoldenrod",
    code: {
      hex: "#EEE8AA"
    },
    id: 266
  },

  {
    color: "lemonchiffon 1 (lemonchiffon)",
    code: {
      hex: "#FFFACD"
    },
    id: 267
  },

  {
    color: "lemonchiffon 2",
    code: {
      hex: "#EEE9BF"
    },
    id: 268
  },

  {
    color: "lemonchiffon 3",
    code: {
      hex: "#CDC9A5"
    },
    id: 269
  },

  {
    color: "lemonchiffon 4",
    code: {
      hex: "#8B8970"
    },
    id: 270
  },

  {
    color: "Lightgoldenrod 1",
    code: {
      hex: "#FFEC8B"
    },
    id: 271
  },

  {
    color: "Lightgoldenrod 2",
    code: {
      hex: "#EEDC82"
    },
    id: 272
  },

  {
    color: "Lightgoldenrod 3",
    code: {
      hex: "#CDBE70"
    },
    id: 273
  },

  {
    color: "Lightgoldenrod 4",
    code: {
      hex: "#8B814C"
    },
    id: 274
  },

  {
    color: "banana",
    code: {
      hex: "#E3CF57"
    },
    id: 275
  },

  {
    color: "gold 1 (gold)",
    code: {
      hex: "#FFD700"
    },
    id: 276
  },

  {
    color: "gold 2",
    code: {
      hex: "#EEC900"
    },
    id: 277
  },

  {
    color: "gold 3",
    code: {
      hex: "#CDAD00"
    },
    id: 278
  },

  {
    color: "gold 4",
    code: {
      hex: "#8B7500"
    },
    id: 279
  },

  {
    color: "cornsilk 1 (cornsilk)",
    code: {
      hex: "#FFF8DC"
    },
    id: 280
  },

  {
    color: "cornsilk 2",
    code: {
      hex: "#EEE8CD"
    },
    id: 281
  },

  {
    color: "cornsilk 3",
    code: {
      hex: "#CDC8B1"
    },
    id: 282
  },

  {
    color: "cornsilk 4",
    code: {
      hex: "#8B8878"
    },
    id: 283
  },

  {
    color: "goldenrod",
    code: {
      hex: "#DAA520"
    },
    id: 284
  },

  {
    color: "goldenrod 1",
    code: {
      hex: "#FFC125"
    },
    id: 285
  },

  {
    color: "goldenrod 2",
    code: {
      hex: "#EEB422"
    },
    id: 286
  },

  {
    color: "goldenrod 3",
    code: {
      hex: "#CD9B1D"
    },
    id: 287
  },

  {
    color: "goldenrod 4",
    code: {
      hex: "#8B6914"
    },
    id: 288
  },

  {
    color: "Darkgoldenrod",
    code: {
      hex: "#B8860B"
    },
    id: 289
  },

  {
    color: "Darkgoldenrod 1",
    code: {
      hex: "#FFB90F"
    },
    id: 290
  },

  {
    color: "Darkgoldenrod 2",
    code: {
      hex: "#EEAD0E"
    },
    id: 291
  },

  {
    color: "Darkgoldenrod 3",
    code: {
      hex: "#CD950C"
    },
    id: 292
  },

  {
    color: "Darkgoldenrod 4",
    code: {
      hex: "#8B6508"
    },
    id: 293
  },

  {
    color: "Orange 1 (Orange)",
    code: {
      hex: "#FFA500"
    },
    id: 294
  },

  {
    color: "Orange 2",
    code: {
      hex: "#EE9A00"
    },
    id: 295
  },

  {
    color: "Orange 3",
    code: {
      hex: "#CD8500"
    },
    id: 296
  },

  {
    color: "Orange 4",
    code: {
      hex: "#8B5A00"
    },
    id: 297
  },

  {
    color: "floralwhite",
    code: {
      hex: "#FFFAF0"
    },
    id: 298
  },

  {
    color: "oldlace",
    code: {
      hex: "#FDF5E6"
    },
    id: 299
  },

  {
    color: "wheat",
    code: {
      hex: "#F5DEB3"
    },
    id: 300
  },

  {
    color: "wheat 1",
    code: {
      hex: "#FFE7BA"
    },
    id: 301
  },

  {
    color: "wheat 2",
    code: {
      hex: "#EED8AE"
    },
    id: 302
  },

  {
    color: "wheat 3",
    code: {
      hex: "#CDBA96"
    },
    id: 303
  },

  {
    color: "wheat 4",
    code: {
      hex: "#8B7E66"
    },
    id: 304
  },

  {
    color: "moccasin",
    code: {
      hex: "#FFE4B5"
    },
    id: 305
  },

  {
    color: "papayawhip",
    code: {
      hex: "#FFEFD5"
    },
    id: 306
  },

  {
    color: "blanchedalmond",
    code: {
      hex: "#FFEBCD"
    },
    id: 307
  },

  {
    color: "navajowhite 1 (navajowhite)",
    code: {
      hex: "#FFDEAD"
    },
    id: 308
  },

  {
    color: "navajowhite 2",
    code: {
      hex: "#EECFA1"
    },
    id: 309
  },

  {
    color: "navajowhite 3",
    code: {
      hex: "#CDB38B"
    },
    id: 310
  },

  {
    color: "navajowhite 4",
    code: {
      hex: "#8B795E"
    },
    id: 311
  },

  {
    color: "eggshell",
    code: {
      hex: "#FCE6C9"
    },
    id: 312
  },

  {
    color: "tan",
    code: {
      hex: "#D2B48C"
    },
    id: 313
  },

  {
    color: "brick",
    code: {
      hex: "#9C661F"
    },
    id: 314
  },

  {
    color: "cadmiumYellow",
    code: {
      hex: "#FF9912"
    },
    id: 315
  },

  {
    color: "antiquewhite",
    code: {
      hex: "#FAEBD7"
    },
    id: 316
  },

  {
    color: "antiquewhite 1",
    code: {
      hex: "#FFEFDB"
    },
    id: 317
  },

  {
    color: "antiquewhite 2",
    code: {
      hex: "#EEDFCC"
    },
    id: 318
  },

  {
    color: "antiquewhite 3",
    code: {
      hex: "#CDC0B0"
    },
    id: 319
  },

  {
    color: "antiquewhite 4",
    code: {
      hex: "#8B8378"
    },
    id: 320
  },

  {
    color: "burlywood",
    code: {
      hex: "#DEB887"
    },
    id: 321
  },

  {
    color: "burlywood 1",
    code: {
      hex: "#FFD39B"
    },
    id: 322
  },

  {
    color: "burlywood 2",
    code: {
      hex: "#EEC591"
    },
    id: 323
  },

  {
    color: "burlywood 3",
    code: {
      hex: "#CDAA7D"
    },
    id: 324
  },

  {
    color: "burlywood 4",
    code: {
      hex: "#8B7355"
    },
    id: 325
  },

  {
    color: "bisque 1 (bisque)",
    code: {
      hex: "#FFE4C4"
    },
    id: 326
  },

  {
    color: "bisque 2",
    code: {
      hex: "#EED5B7"
    },
    id: 327
  },

  {
    color: "bisque 3",
    code: {
      hex: "#CDB79E"
    },
    id: 328
  },

  {
    color: "bisque 4",
    code: {
      hex: "#8B7D6B"
    },
    id: 329
  },

  {
    color: "melon",
    code: {
      hex: "#E3A869"
    },
    id: 330
  },

  {
    color: "carrot",
    code: {
      hex: "#ED9121"
    },
    id: 331
  },

  {
    color: "DarkOrange",
    code: {
      hex: "#FF8C00"
    },
    id: 332
  },

  {
    color: "DarkOrange 1",
    code: {
      hex: "#FF7F00"
    },
    id: 333
  },

  {
    color: "DarkOrange 2",
    code: {
      hex: "#EE7600"
    },
    id: 334
  },

  {
    color: "DarkOrange 3",
    code: {
      hex: "#CD6600"
    },
    id: 335
  },

  {
    color: "DarkOrange 4",
    code: {
      hex: "#8B4500"
    },
    id: 336
  },

  {
    color: "Orange",
    code: {
      hex: "#FF8000"
    },
    id: 337
  },

  {
    color: "tan 1",
    code: {
      hex: "#FFA54F"
    },
    id: 338
  },

  {
    color: "tan 2",
    code: {
      hex: "#EE9A49"
    },
    id: 339
  },

  {
    color: "tan 3 (peru)",
    code: {
      hex: "#CD853F"
    },
    id: 340
  },

  {
    color: "tan 4",
    code: {
      hex: "#8B5A2B"
    },
    id: 341
  },

  {
    color: "linen",
    code: {
      hex: "#FAF0E6"
    },
    id: 342
  },

  {
    color: "peachpuff 1 (peachpuff)",
    code: {
      hex: "#FFDAB9"
    },
    id: 343
  },

  {
    color: "peachpuff 2",
    code: {
      hex: "#EECBAD"
    },
    id: 344
  },

  {
    color: "peachpuff 3",
    code: {
      hex: "#CDAF95"
    },
    id: 345
  },

  {
    color: "peachpuff 4",
    code: {
      hex: "#8B7765"
    },
    id: 346
  },

  {
    color: "Seashell 1 (Seashell)",
    code: {
      hex: "#FFF5EE"
    },
    id: 347
  },

  {
    color: "Seashell 2",
    code: {
      hex: "#EEE5DE"
    },
    id: 348
  },

  {
    color: "Seashell 3",
    code: {
      hex: "#CDC5BF"
    },
    id: 349
  },

  {
    color: "Seashell 4",
    code: {
      hex: "#8B8682"
    },
    id: 350
  },

  {
    color: "SandyBrown",
    code: {
      hex: "#F4A460"
    },
    id: 351
  },

  {
    color: "rawsienna",
    code: {
      hex: "#C76114"
    },
    id: 352
  },

  {
    color: "chocolate",
    code: {
      hex: "#D2691E"
    },
    id: 353
  },

  {
    color: "chocolate 1",
    code: {
      hex: "#FF7F24"
    },
    id: 354
  },

  {
    color: "chocolate 2",
    code: {
      hex: "#EE7621"
    },
    id: 355
  },

  {
    color: "chocolate 3",
    code: {
      hex: "#CD661D"
    },
    id: 356
  },

  {
    color: "chocolate 4 (saddleBrown)",
    code: {
      hex: "#8B4513"
    },
    id: 357
  },

  {
    color: "Ivoryblack",
    code: {
      hex: "#292421"
    },
    id: 358
  },

  {
    color: "flesh",
    code: {
      hex: "#FF7D40"
    },
    id: 359
  },

  {
    color: "cadmiumOrange",
    code: {
      hex: "#FF6103"
    },
    id: 360
  },

  {
    color: "burntsienna",
    code: {
      hex: "#8A360F"
    },
    id: 361
  },

  {
    color: "sienna",
    code: {
      hex: "#A0522D"
    },
    id: 362
  },

  {
    color: "sienna 1",
    code: {
      hex: "#FF8247"
    },
    id: 363
  },

  {
    color: "sienna 2",
    code: {
      hex: "#EE7942"
    },
    id: 364
  },

  {
    color: "sienna 3",
    code: {
      hex: "#CD6839"
    },
    id: 365
  },

  {
    color: "sienna 4",
    code: {
      hex: "#8B4726"
    },
    id: 366
  },

  {
    color: "Lightsalmon 1 (Lightsalmon)",
    code: {
      hex: "#FFA07A"
    },
    id: 367
  },

  {
    color: "Lightsalmon 2",
    code: {
      hex: "#EE9572"
    },
    id: 368
  },

  {
    color: "Lightsalmon 3",
    code: {
      hex: "#CD8162"
    },
    id: 369
  },

  {
    color: "Lightsalmon 4",
    code: {
      hex: "#8B5742"
    },
    id: 370
  },

  {
    color: "Coral",
    code: {
      hex: "#FF7F50"
    },
    id: 371
  },

  {
    color: "OrangeRed 1 (OrangeRed)",
    code: {
      hex: "#FF4500"
    },
    id: 372
  },

  {
    color: "OrangeRed 2",
    code: {
      hex: "#EE4000"
    },
    id: 373
  },

  {
    color: "OrangeRed 3",
    code: {
      hex: "#CD3700"
    },
    id: 374
  },

  {
    color: "OrangeRed 4",
    code: {
      hex: "#8B2500"
    },
    id: 375
  },

  {
    color: "sepia",
    code: {
      hex: "#5E2612"
    },
    id: 376
  },

  {
    color: "Darksalmon",
    code: {
      hex: "#E9967A"
    },
    id: 377
  },

  {
    color: "salmon 1",
    code: {
      hex: "#FF8C69"
    },
    id: 378
  },

  {
    color: "salmon 2",
    code: {
      hex: "#EE8262"
    },
    id: 379
  },

  {
    color: "salmon 3",
    code: {
      hex: "#CD7054"
    },
    id: 380
  },

  {
    color: "salmon 4",
    code: {
      hex: "#8B4C39"
    },
    id: 381
  },

  {
    color: "Coral 1",
    code: {
      hex: "#FF7256"
    },
    id: 382
  },

  {
    color: "Coral 2",
    code: {
      hex: "#EE6A50"
    },
    id: 383
  },

  {
    color: "Coral 3",
    code: {
      hex: "#CD5B45"
    },
    id: 384
  },

  {
    color: "Coral 4",
    code: {
      hex: "#8B3E2F"
    },
    id: 385
  },

  {
    color: "burntumber",
    code: {
      hex: "#8A3324"
    },
    id: 386
  },

  {
    color: "tomato 1 (tomato)",
    code: {
      hex: "#FF6347"
    },
    id: 387
  },

  {
    color: "tomato 2",
    code: {
      hex: "#EE5C42"
    },
    id: 388
  },

  {
    color: "tomato 3",
    code: {
      hex: "#CD4F39"
    },
    id: 389
  },

  {
    color: "tomato 4",
    code: {
      hex: "#8B3626"
    },
    id: 390
  },

  {
    color: "salmon",
    code: {
      hex: "#FA8072"
    },
    id: 391
  },

  {
    color: "mistyrose 1 (mistyrose)",
    code: {
      hex: "#FFE4E1"
    },
    id: 392
  },

  {
    color: "mistyrose 2",
    code: {
      hex: "#EED5D2"
    },
    id: 393
  },

  {
    color: "mistyrose 3",
    code: {
      hex: "#CDB7B5"
    },
    id: 394
  },

  {
    color: "mistyrose 4",
    code: {
      hex: "#8B7D7B"
    },
    id: 395
  },

  {
    color: "snow 1 (snow)",
    code: {
      hex: "#FFFAFA"
    },
    id: 396
  },

  {
    color: "snow 2",
    code: {
      hex: "#EEE9E9"
    },
    id: 397
  },

  {
    color: "snow 3",
    code: {
      hex: "#CDC9C9"
    },
    id: 398
  },

  {
    color: "snow 4",
    code: {
      hex: "#8B8989"
    },
    id: 399
  },

  {
    color: "RosyBrown",
    code: {
      hex: "#BC8F8F"
    },
    id: 400
  },

  {
    color: "RosyBrown 1",
    code: {
      hex: "#FFC1C1"
    },
    id: 401
  },

  {
    color: "RosyBrown 2",
    code: {
      hex: "#EEB4B4"
    },
    id: 402
  },

  {
    color: "RosyBrown 3",
    code: {
      hex: "#CD9B9B"
    },
    id: 403
  },

  {
    color: "RosyBrown 4",
    code: {
      hex: "#8B6969"
    },
    id: 404
  },

  {
    color: "LightCoral",
    code: {
      hex: "#F08080"
    },
    id: 405
  },

  {
    color: "IndianRed",
    code: {
      hex: "#CD5C5C"
    },
    id: 406
  },

  {
    color: "IndianRed 1",
    code: {
      hex: "#FF6A6A"
    },
    id: 407
  },

  {
    color: "IndianRed 2",
    code: {
      hex: "#EE6363"
    },
    id: 408
  },

  {
    color: "IndianRed 4",
    code: {
      hex: "#8B3A3A"
    },
    id: 409
  },

  {
    color: "IndianRed 3",
    code: {
      hex: "#CD5555"
    },
    id: 410
  },

  {
    color: "Brown",
    code: {
      hex: "#A52A2A"
    },
    id: 411
  },

  {
    color: "Brown 1",
    code: {
      hex: "#FF4040"
    },
    id: 412
  },

  {
    color: "Brown 2",
    code: {
      hex: "#EE3B3B"
    },
    id: 413
  },

  {
    color: "Brown 3",
    code: {
      hex: "#CD3333"
    },
    id: 414
  },

  {
    color: "Brown 4",
    code: {
      hex: "#8B2323"
    },
    id: 415
  },

  {
    color: "firebrick",
    code: {
      hex: "#B22222"
    },
    id: 416
  },

  {
    color: "firebrick 1",
    code: {
      hex: "#FF3030"
    },
    id: 417
  },

  {
    color: "firebrick 2",
    code: {
      hex: "#EE2C2C"
    },
    id: 418
  },

  {
    color: "firebrick 3",
    code: {
      hex: "#CD2626"
    },
    id: 419
  },

  {
    color: "firebrick 4",
    code: {
      hex: "#8B1A1A"
    },
    id: 420
  },

  {
    color: "Red 1 (Red*)",
    code: {
      hex: "#FF0000"
    },
    id: 421
  },

  {
    color: "Red 2",
    code: {
      hex: "#EE0000"
    },
    id: 422
  },

  {
    color: "Red 3",
    code: {
      hex: "#CD0000"
    },
    id: 423
  },

  {
    color: "Red 4 (DarkRed)",
    code: {
      hex: "#8B0000"
    },
    id: 424
  },

  {
    color: "maroon*",
    code: {
      hex: "#800000"
    },
    id: 425
  },

  {
    color: "sgi beet",
    code: {
      hex: "#8E388E"
    },
    id: 426
  },

  {
    color: "sgi slateBlue",
    code: {
      hex: "#7171C6"
    },
    id: 427
  },

  {
    color: "sgi LightBlue",
    code: {
      hex: "#7D9EC0"
    },
    id: 428
  },

  {
    color: "sgi teal",
    code: {
      hex: "#388E8E"
    },
    id: 429
  },

  {
    color: "sgi Chartreuse",
    code: {
      hex: "#71C671"
    },
    id: 430
  },

  {
    color: "sgi Olivedrab",
    code: {
      hex: "#8E8E38"
    },
    id: 431
  },

  {
    color: "sgi brightGray",
    code: {
      hex: "#C5C1AA"
    },
    id: 432
  },

  {
    color: "sgi salmon",
    code: {
      hex: "#C67171"
    },
    id: 433
  },

  {
    color: "sgi DarkGray",
    code: {
      hex: "#555555"
    },
    id: 434
  },

  {
    color: "sgi Gray 12",
    code: {
      hex: "#1E1E1E"
    },
    id: 435
  },

  {
    color: "sgi Gray 16",
    code: {
      hex: "#282828"
    },
    id: 436
  },

  {
    color: "sgi Gray 32",
    code: {
      hex: "#515151"
    },
    id: 437
  },

  {
    color: "sgi Gray 36",
    code: {
      hex: "#5B5B5B"
    },
    id: 438
  },

  {
    color: "sgi Gray 52",
    code: {
      hex: "#848484"
    },
    id: 439
  },

  {
    color: "sgi Gray 56",
    code: {
      hex: "#8E8E8E"
    },
    id: 440
  },

  {
    color: "sgi LightGray",
    code: {
      hex: "#AAAAAA"
    },
    id: 441
  },

  {
    color: "sgi Gray 72",
    code: {
      hex: "#B7B7B7"
    },
    id: 442
  },

  {
    color: "sgi Gray 76",
    code: {
      hex: "#C1C1C1"
    },
    id: 443
  },

  {
    color: "sgi Gray 92",
    code: {
      hex: "#EAEAEA"
    },
    id: 444
  },

  {
    color: "sgi Gray 96",
    code: {
      hex: "#F4F4F4"
    },
    id: 445
  },

  {
    color: "white*",
    code: {
      hex: "#FFFFFF"
    },
    id: 446
  },

  {
    color: "white smoke (Gray 96)",
    code: {
      hex: "#F5F5F5"
    },
    id: 447
  },

  {
    color: "gainsboro",
    code: {
      hex: "#DCDCDC"
    },
    id: 448
  },

  {
    color: "Lightgrey",
    code: {
      hex: "#D3D3D3"
    },
    id: 449
  },

  {
    color: "silver*",
    code: {
      hex: "#C0C0C0"
    },
    id: 450
  },

  {
    color: "DarkGray",
    code: {
      hex: "#A9A9A9"
    },
    id: 451
  },

  {
    color: "Gray*",
    code: {
      hex: "#808080"
    },
    id: 452
  },

  {
    color: "dimGray (Gray 42)",
    code: {
      hex: "#696969"
    },
    id: 453
  },

  {
    color: "black*",
    code: {
      hex: "#000000"
    },
    id: 454
  },

  {
    color: "Gray 99",
    code: {
      hex: "#FCFCFC"
    },
    id: 455
  },

  {
    color: "Gray 98",
    code: {
      hex: "#FAFAFA"
    },
    id: 456
  },

  {
    color: "Gray 97",
    code: {
      hex: "#F7F7F7"
    },
    id: 457
  },

  {
    color: "white smoke (Gray 96)",
    code: {
      hex: "#F5F5F5"
    },
    id: 458
  },

  {
    color: "Gray 95",
    code: {
      hex: "#F2F2F2"
    },
    id: 459
  },

  {
    color: "Gray 94",
    code: {
      hex: "#F0F0F0"
    },
    id: 460
  },

  {
    color: "Gray 93",
    code: {
      hex: "#EDEDED"
    },
    id: 461
  },

  {
    color: "Gray 92",
    code: {
      hex: "#EBEBEB"
    },
    id: 462
  },

  {
    color: "Gray 91",
    code: {
      hex: "#E8E8E8"
    },
    id: 463
  },

  {
    color: "Gray 90",
    code: {
      hex: "#E5E5E5"
    },
    id: 464
  },

  {
    color: "Gray 89",
    code: {
      hex: "#E3E3E3"
    },
    id: 465
  },

  {
    color: "Gray 88",
    code: {
      hex: "#E0E0E0"
    },
    id: 466
  },

  {
    color: "Gray 87",
    code: {
      hex: "#DEDEDE"
    },
    id: 467
  },

  {
    color: "Gray 86",
    code: {
      hex: "#DBDBDB"
    },
    id: 468
  },

  {
    color: "Gray 85",
    code: {
      hex: "#D9D9D9"
    },
    id: 469
  },

  {
    color: "Gray 84",
    code: {
      hex: "#D6D6D6"
    },
    id: 470
  },

  {
    color: "Gray 83",
    code: {
      hex: "#D4D4D4"
    },
    id: 471
  },

  {
    color: "Gray 82",
    code: {
      hex: "#D1D1D1"
    },
    id: 472
  },

  {
    color: "Gray 81",
    code: {
      hex: "#CFCFCF"
    },
    id: 473
  },

  {
    color: "Gray 80",
    code: {
      hex: "#CCCCCC"
    },
    id: 474
  },

  {
    color: "Gray 79",
    code: {
      hex: "#C9C9C9"
    },
    id: 475
  },

  {
    color: "Gray 78",
    code: {
      hex: "#C7C7C7"
    },
    id: 476
  },

  {
    color: "Gray 77",
    code: {
      hex: "#C4C4C4"
    },
    id: 477
  },

  {
    color: "Gray 76",
    code: {
      hex: "#C2C2C2"
    },
    id: 478
  },

  {
    color: "Gray 75",
    code: {
      hex: "#BFBFBF"
    },
    id: 479
  },

  {
    color: "Gray 74",
    code: {
      hex: "#BDBDBD"
    },
    id: 480
  },

  {
    color: "Gray 73",
    code: {
      hex: "#BABABA"
    },
    id: 481
  },

  {
    color: "Gray 72",
    code: {
      hex: "#B8B8B8"
    },
    id: 482
  },

  {
    color: "Gray 71",
    code: {
      hex: "#B5B5B5"
    },
    id: 483
  },

  {
    color: "Gray 70",
    code: {
      hex: "#B3B3B3"
    },
    id: 484
  },

  {
    color: "Gray 69",
    code: {
      hex: "#B0B0B0"
    },
    id: 485
  },

  {
    color: "Gray 68",
    code: {
      hex: "#ADADAD"
    },
    id: 486
  },

  {
    color: "Gray 67",
    code: {
      hex: "#ABABAB"
    },
    id: 487
  },

  {
    color: "Gray 66",
    code: {
      hex: "#A8A8A8"
    },
    id: 488
  },

  {
    color: "Gray 65",
    code: {
      hex: "#A6A6A6"
    },
    id: 489
  },

  {
    color: "Gray 64",
    code: {
      hex: "#A3A3A3"
    },
    id: 490
  },

  {
    color: "Gray 63",
    code: {
      hex: "#A1A1A1"
    },
    id: 491
  },

  {
    color: "Gray 62",
    code: {
      hex: "#9E9E9E"
    },
    id: 492
  },

  {
    color: "Gray 61",
    code: {
      hex: "#9C9C9C"
    },
    id: 493
  },

  {
    color: "Gray 60",
    code: {
      hex: "#999999"
    },
    id: 494
  },

  {
    color: "Gray 59",
    code: {
      hex: "#969696"
    },
    id: 495
  },

  {
    color: "Gray 58",
    code: {
      hex: "#949494"
    },
    id: 496
  },

  {
    color: "Gray 57",
    code: {
      hex: "#919191"
    },
    id: 497
  },

  {
    color: "Gray 56",
    code: {
      hex: "#8F8F8F"
    },
    id: 498
  },

  {
    color: "Gray 55",
    code: {
      hex: "#8C8C8C"
    },
    id: 499
  },

  {
    color: "Gray 54",
    code: {
      hex: "#8A8A8A"
    },
    id: 500
  },

  {
    color: "Gray 53",
    code: {
      hex: "#878787"
    },
    id: 501
  },

  {
    color: "Gray 52",
    code: {
      hex: "#858585"
    },
    id: 502
  },

  {
    color: "Gray 51",
    code: {
      hex: "#828282"
    },
    id: 503
  },

  {
    color: "Gray 50",
    code: {
      hex: "#7F7F7F"
    },
    id: 504
  },

  {
    color: "Gray 49",
    code: {
      hex: "#7D7D7D"
    },
    id: 505
  },

  {
    color: "Gray 48",
    code: {
      hex: "#7A7A7A"
    },
    id: 506
  },

  {
    color: "Gray 47",
    code: {
      hex: "#787878"
    },
    id: 507
  },

  {
    color: "Gray 46",
    code: {
      hex: "#757575"
    },
    id: 508
  },

  {
    color: "Gray 45",
    code: {
      hex: "#737373"
    },
    id: 509
  },

  {
    color: "Gray 44",
    code: {
      hex: "#707070"
    },
    id: 510
  },

  {
    color: "Gray 43",
    code: {
      hex: "#6E6E6E"
    },
    id: 511
  },

  {
    color: "Gray 42",
    code: {
      hex: "#6B6B6B"
    },
    id: 512
  },

  {
    color: "dimGray (Gray 42)",
    code: {
      hex: "#696969"
    },
    id: 513
  },

  {
    color: "Gray 40",
    code: {
      hex: "#666666"
    },
    id: 514
  },

  {
    color: "Gray 39",
    code: {
      hex: "#636363"
    },
    id: 515
  },

  {
    color: "Gray 38",
    code: {
      hex: "#616161"
    },
    id: 516
  },

  {
    color: "Gray 37",
    code: {
      hex: "#5E5E5E"
    },
    id: 517
  },

  {
    color: "Gray 36",
    code: {
      hex: "#5C5C5C"
    },
    id: 518
  },

  {
    color: "Gray 35",
    code: {
      hex: "#595959"
    },
    id: 519
  },

  {
    color: "Gray 34",
    code: {
      hex: "#575757"
    },
    id: 520
  },

  {
    color: "Gray 33",
    code: {
      hex: "#545454"
    },
    id: 521
  },

  {
    color: "Gray 32",
    code: {
      hex: "#525252"
    },
    id: 522
  },

  {
    color: "Gray 31",
    code: {
      hex: "#4F4F4F"
    },
    id: 523
  },

  {
    color: "Gray 30",
    code: {
      hex: "#4D4D4D"
    },
    id: 524
  },

  {
    color: "Gray 29",
    code: {
      hex: "#4A4A4A"
    },
    id: 525
  },

  {
    color: "Gray 28",
    code: {
      hex: "#474747"
    },
    id: 526
  },

  {
    color: "Gray 27",
    code: {
      hex: "#454545"
    },
    id: 527
  },

  {
    color: "Gray 26",
    code: {
      hex: "#424242"
    },
    id: 528
  },

  {
    color: "Gray 25",
    code: {
      hex: "#404040"
    },
    id: 529
  },

  {
    color: "Gray 24",
    code: {
      hex: "#3D3D3D"
    },
    id: 530
  },

  {
    color: "Gray 23",
    code: {
      hex: "#3B3B3B"
    },
    id: 531
  },

  {
    color: "Gray 22",
    code: {
      hex: "#383838"
    },
    id: 532
  },

  {
    color: "Gray 21",
    code: {
      hex: "#363636"
    },
    id: 533
  },

  {
    color: "Gray 20",
    code: {
      hex: "#333333"
    },
    id: 534
  },

  {
    color: "Gray 19",
    code: {
      hex: "#303030"
    },
    id: 535
  },

  {
    color: "Gray 18",
    code: {
      hex: "#2E2E2E"
    },
    id: 536
  },

  {
    color: "Gray 17",
    code: {
      hex: "#2B2B2B"
    },
    id: 537
  },

  {
    color: "Gray 16",
    code: {
      hex: "#292929"
    },
    id: 538
  },

  {
    color: "Gray 15",
    code: {
      hex: "#262626"
    },
    id: 539
  },

  {
    color: "Gray 14",
    code: {
      hex: "#242424"
    },
    id: 540
  },

  {
    color: "Gray 13",
    code: {
      hex: "#212121"
    },
    id: 541
  },

  {
    color: "Gray 12",
    code: {
      hex: "#1F1F1F"
    },
    id: 542
  },

  {
    color: "Gray 11",
    code: {
      hex: "#1C1C1C"
    },
    id: 543
  },

  {
    color: "Gray 10",
    code: {
      hex: "#1A1A1A"
    },
    id: 544
  },

  {
    color: "Gray 9",
    code: {
      hex: "#171717"
    },
    id: 545
  },

  {
    color: "Gray 8",
    code: {
      hex: "#141414"
    },
    id: 546
  },

  {
    color: "Gray 7",
    code: {
      hex: "#121212"
    },
    id: 547
  },

  {
    color: "Gray 6",
    code: {
      hex: "#0F0F0F"
    },
    id: 548
  },

  {
    color: "Gray 5",
    code: {
      hex: "#0D0D0D"
    },
    id: 549
  },

  {
    color: "Gray 4",
    code: {
      hex: "#0A0A0A"
    },
    id: 550
  },

  {
    color: "Gray 3",
    code: {
      hex: "#080808"
    },
    id: 551
  },

  {
    color: "Gray 2",
    code: {
      hex: "#050505"
    },
    id: 552
  },

  {
    color: "Gray 1",
    code: {
      hex: "#030303"
    },
    id: 553
  }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

randomColor = () =>{
    const rcolor = getRandomInt(552); 
    document.documentElement.style.setProperty('--main-bg-color', hexCode[rcolor].code.hex );
    document.getElementById("color").innerHTML = hexCode[rcolor].color;
    document.getElementById("color").style.color =  hexCode[rcolor].code.hex;
}
