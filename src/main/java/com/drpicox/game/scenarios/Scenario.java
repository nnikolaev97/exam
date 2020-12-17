package com.drpicox.game.scenarios;

import javax.persistence.*;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.*;
import java.util.function.BiConsumer;
import java.util.function.BiPredicate;
import java.util.stream.Collectors;

@Entity
public class Scenario {
    @Id
    private String name;

    @Transient
    private TreeMap<String,String> values = null;

    public Scenario(String name) {
        this.name = name;
    }

    // JPA Constructor
    protected Scenario(){}


    public String getName() {
        return name;
    }

    public SortedMap<String, String> getValues() {
        if (values == null) loadValues();

        return values;
    }

    public Optional<String> findKey(String prefix, BiPredicate<String, String> predicate) {
        var values = getValues();
        return values.keySet().stream()
                .filter(key -> key.startsWith(prefix))
                .filter(key -> predicate.test(key, values.get(key)))
                .findAny();
    }

    public void forEach(String prefix, BiConsumer<String, String> action) {
        getValues().forEach((key, value) -> {
            if (!key.startsWith(prefix)) return;
            action.accept(key, value);
        });
    }

    public void forEachInteger(String prefix, BiConsumer<String, Integer> action) {
        getValues().forEach((key, value) -> {
            if (!key.startsWith(prefix)) return;
            action.accept(key, Integer.parseInt(value));
        });
    }

    public int getInt(String key) {
        return Integer.parseInt(getValues().get(key));
    }

    private void loadValues() {
        var fileName = name.toLowerCase().replaceAll("[^\\w\\d]+", "-") + ".properties";
        var path = getScenariosPath();
        var file = new File(path, fileName);
        try {
            var reader = new FileReader(file);
            var props = new Properties();
            props.load(reader);

            values = new TreeMap<>();
            props.forEach((key, value) -> values.put(""+key, ""+value));
        } catch (IOException e) {
            throw new Error("Error while loading scenario '"+name+"'", e);
        }
    }

    private String getScenariosPath() {
        ClassLoader loader = Thread.currentThread().getContextClassLoader();
        URL url = loader.getResource("scenarios");
        return url.getPath().replaceAll("%20", " ");
    }

}
