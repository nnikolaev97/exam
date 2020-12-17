package com.drpicox.game.testPost.helpers;

import com.drpicox.game.testPost.PostLineStep;
import com.drpicox.game.testPost.SnapshotService;
import com.drpicox.game.testPost.reader.PostLine;
import org.springframework.stereotype.Component;

@Component
public class PLSSnapshot implements PostLineStep {

    private static final String RE = "SNAPSHOT status=(\\d+)";
    private final SnapshotService snapshotService;

    public PLSSnapshot(SnapshotService SnapshotService) {
        this.snapshotService = SnapshotService;
    }

    @Override
    public boolean match(PostLine line) {
        return line.match(RE) != null;
    }

    @Override
    public void run(PostLine line) {
        var match = line.match(RE);
        var status = Integer.parseInt(match[1]);
        snapshotService.expectStatusAndSave(status);
    }

    @Override
    public String getPrettyPrint() {
        return "Deal with a previous snapshot (" + getClass().getName() + ")";
    }
}
