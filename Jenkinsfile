pipeline {
  agent any
  options {
    ansiColor('xterm')
    disableConcurrentBuilds()
  }
  environment {
    REGISTRY = 'rma-projects-docker-local.repo.vito.be'
    REGISTRY_CREDENTIAL = 'svc_git_rma'
    DOCKER_IMAGE_REPO = 'techradar-website'
    DOCKER_IMAGE_TAG = "${env.BUILD_NUMBER}"
    DOCKER_IMAGE_REFERENCE = "${DOCKER_IMAGE_REPO}:${DOCKER_IMAGE_TAG}"
    CURRENT_COMMIT_TAG_NAME = sh(script: 'git tag --points-at HEAD', returnStdout: true).trim()

  }
  stages {
    stage('Build docker image') {
      steps {
        script {
          dockerImage = docker.build("${DOCKER_IMAGE_REFERENCE}", "--pull .")
        }
      }
    }
  
    // This stage will only run on a 'tag build' (requires a manual "Build Now")
    stage('Deploy tagged image to production') {
      when {
        expression {
          env.BRANCH_NAME == env.CURRENT_COMMIT_TAG_NAME
        }
      }
      steps {
        deployDockerImageStep(
          deployServer: 'sasappdock01.vito.local',
          deployFolder: '/var/docker/techradar',
          deployUser: 'jenkins',
          // The name of the environment variable that needs to be updated
          deployTagEnvironmentKey: 'IMAGE_TAG',
          deployTagEnvironmentValue: "${env.CURRENT_COMMIT_TAG_NAME}"
        )
      }
    }
  }

  post {
    always {
      deleteDir()
    }
  }
}

def get_commit_tag() {
  // Run shell command and safely handle null or empty results
  def tag = sh(script: 'git tag --points-at HEAD', returnStdout: true).trim()
  if (tag != null && tag != '') {
    return tag
  } else {
    return false
  }
}