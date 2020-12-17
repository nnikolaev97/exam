package com.drpicox.game.forms;

import com.drpicox.game.scenarios.Scenario;

import java.util.Arrays;
import java.util.Set;
import java.util.SortedMap;
import java.util.stream.Collectors;

public class ScenarioForm {
    private String name;
    private SortedMap<String, String> values;

    public ScenarioForm(Scenario scenario) {
        this.name = scenario.getName();
        this.values = scenario.getValues();
    }

    public int getInt(String key) {
        return Integer.parseInt(values.get(key));
    }

    public Set<String> getStringSet(String key) {
        var value = values.getOrDefault(key, "");
        return Arrays.stream(value.split(","))
                .map(v -> v.trim())
                .collect(Collectors.toSet());
    }
}
