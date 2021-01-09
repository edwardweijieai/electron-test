# @see https://medium.com/gitpod/developing-native-ui-applications-in-gitpod-15af2967c24e
FROM gitpod/workspace-full-vnc
RUN apt-get update \
    && apt-get install -y libgtk-3-dev

# FROM gitpod/workspace-full
# USER gitpod

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && \
#     sudo apt-get install -yq bastet && \
#     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
