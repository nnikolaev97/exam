package com.drpicox.game.testPost;

import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testPost.reader.PostSection;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PostRunner {
    private final List<PostLineStep> postLineSteps;

    public PostRunner(List<PostLineStep> postLineSteps) {
        this.postLineSteps = postLineSteps;
    }

    public void runSection(PostSection section) {
        var lines = section.getLines();
        runLines(lines);
    }

    private void runLines(List<PostLine> lines) {
        for (var line: lines) {
            runLine(line);
        }
    }

    private void runLine(PostLine line) {
        print(line);
        var runners = matchLine(line);
        if (runners.size() > 1)
            throw newErrorTooManyMatches(runners, line);
        if (runners.size() < 1)
            throw newErrorNoRunnersFound(line);

        var runner = runners.get(0);
        runner.run(line);
    }

    private void print(PostLine line) {
        System.out.println(line.getPrettyPrint());
    }

    private List<PostLineStep> matchLine(PostLine line) {
        return postLineSteps.stream()
                .filter(r -> r.match(line))
                .collect(Collectors.toList());
    }

    private AssertionError newErrorTooManyMatches(List<PostLineStep> runners, PostLine line) {
        var message = new StringBuilder();

        message.append("Too many PostLineSteps (")
            .append(runners.size())
            .append(") matches the instruction:\n");

        message.append("=> ")
                .append(line.getPrettyPrint())
                .append("\n");

        message.append("They are:\n");
        for (var runner: runners)
            message.append("  - ")
                    .append(runner.getPrettyPrint())
                    .append('\n');

        return new AssertionError(message.toString());
    }

    private AssertionError newErrorNoRunnersFound(PostLine line) {
        return new AssertionError("There are no PostLineSteps (0) matching the instruction:\n=> " + line.getPrettyPrint());
    }


}
