jQuery("#simulation")
  .on("click", ".s-1f2ab872-049a-4439-9889-7b88ff25e294 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1f2ab872-049a-4439-9889-7b88ff25e294 #s-raised_Button": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 5.0px 7.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1f2ab872-049a-4439-9889-7b88ff25e294 #s-raised_Button > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#3700B3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1f2ab872-049a-4439-9889-7b88ff25e294 #s-raised_Button": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 2.0px 2.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1f2ab872-049a-4439-9889-7b88ff25e294 #s-raised_Button > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#6200EE"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });